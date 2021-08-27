import AlipaySdk, { AlipaySdkCommonResult } from "alipay-sdk";
import paymentConfig from "@/config/payment/paymentConfig";
import { PaymentOrder } from "@entity/PaymentOrder.entity";
import getConnectionHelper from "@entity/datebaseHelper";

const logger = require("@util/logger")("service/AlipayApp");

export interface CreateOrderInfo {
    /** 外部订单号 */
    outTradeNo: string;
    /** 业务标识前缀 */
    businessFlagPrefix: string;
    /** 商品名称 */
    subject: string;
    /** 金额（元） */
    totalAmount: number;
}

class AlipayApp extends AlipaySdk {
    constructor(config) {
        super(config);
    }

    /**
     * 创建当面付订单
     * @param orderInfo
     */
    async createFaceToFaceOrder(
        orderInfo: CreateOrderInfo
    ): Promise<AlipaySdkCommonResult | string> {
        logger.info("准备创建订单", orderInfo);
        // TODO: 这个类型怎么写......
        const createOrderResult: any = await this.exec("alipay.trade.precreate", {
            notifyUrl: paymentConfig.notifyUrl,
            bizContent: {
                ...orderInfo,
            },
        });
        logger.info("订单创建结果", createOrderResult);
        if (createOrderResult.msg === "Success") {
            // 创建订单成功，存入数据库
            logger.info("成功创建订单，写数据库");
            const connection = await getConnectionHelper("nodejs_backend");
            const paymentOrderRepository = connection.getRepository(PaymentOrder);
            const paymentOrder = paymentOrderRepository.create({
                ...orderInfo,
                qrCode: createOrderResult.qrCode,
                tradeStatus: "pre_create", // 订单创建。实际并不会通知这个状态
            });
            await paymentOrderRepository.save(paymentOrder);
        }
        return createOrderResult;
    }

    /**
     * 更新支付订单的状态，未来考虑这里发 mq 通知依赖项（按 businessFlagPrefix 过滤订阅）
     * @param outTradeNo 外部订单号
     * @param extraInfo 完整异步通知信息
     */
    async updateOrderPaySuccess(outTradeNo: string, extraInfo: any) {
        const connection = await getConnectionHelper("nodejs_backend");
        const paymentOrderRepository = connection.getRepository(PaymentOrder);
        const currentPaymentOrder: PaymentOrder = await paymentOrderRepository
            .createQueryBuilder("order")
            .where("order.outTradeNo = :outTradeNo ", { outTradeNo: outTradeNo })
            .getOne();
        currentPaymentOrder.tradeStatus = extraInfo.trade_status;
        currentPaymentOrder.paymentDate = extraInfo.gmt_payment;
        currentPaymentOrder.tradeNo = extraInfo.trade_no;
        currentPaymentOrder.fundBillList = extraInfo.fund_bill_list;
        await paymentOrderRepository.save(currentPaymentOrder);
        // TODO 向外部发通知（如 mq）
    }
}

export default new AlipayApp({ ...paymentConfig });
