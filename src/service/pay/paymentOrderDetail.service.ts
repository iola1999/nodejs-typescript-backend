import getConnectionHelper from "@entity/datebaseHelper";
import { Request, Response } from "express";
import { PaymentOrder } from "@entity/PaymentOrder.entity";

const logger = require("@util/logger")("service/paymentOrderDetail");

export default async (req: Request, res: Response) => {
    const { outTradeNo } = req.query;
    logger.info("requestQuery", req.query);
    if (!outTradeNo) {
        res.send({});
        return;
    }

    const connection = await getConnectionHelper("nodejs_backend");
    const paymentOrderRepository = connection.getRepository(PaymentOrder);
    const currentPaymentOrder: PaymentOrder = await paymentOrderRepository
        .createQueryBuilder("order")
        .where("order.outTradeNo = :outTradeNo ", { outTradeNo: outTradeNo })
        .getOne();
    if (!currentPaymentOrder) {
        res.send({});
        return;
    }
    res.send(currentPaymentOrder);
};
