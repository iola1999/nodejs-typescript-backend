const logger = require("@util/logger")("service/handlePaymentNotify");
import { Request, Response } from "express";
import alipayAppInstance from "@/service/pay/innerService/AlipayAppInstance";

export default async (req: Request, res: Response) => {
    let requestBody = req.body;
    const checkSignResult = alipayAppInstance.checkNotifySign(requestBody);
    logger.info("checkSignResult", checkSignResult);
    // if(!checkSignResult) {
    //     res.send("fail");
    //     return;
    // }
    if (requestBody.trade_status === "TRADE_SUCCESS") {
        await alipayAppInstance.updateOrderPaySuccess(requestBody.out_trade_no, requestBody);
    }
    res.send("success");
};
