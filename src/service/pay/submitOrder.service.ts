import { generateOrderIdByTime } from "@util/datetimeUtil";
import { Request, Response } from "express";
import alipayAppInstance, { CreateOrderInfo } from "@/service/pay/innerService/AlipayAppInstance";

const logger = require("@util/logger")("service/submitOrder");

export default async (req: Request, res: Response) => {
    logger.info("submitOrder");
    const businessFlagPrefix = "testPay";
    const orderInfo: CreateOrderInfo = {
        businessFlagPrefix,
        outTradeNo: generateOrderIdByTime(businessFlagPrefix),
        subject: "hello",
        totalAmount: 0.01,
    };
    const result = await alipayAppInstance.createFaceToFaceOrder(orderInfo);
    res.json(result);
};
