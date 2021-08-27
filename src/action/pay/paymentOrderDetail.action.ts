const logger = require("@util/logger")("request/paymentOrderDetail");
import actionService from "@/service/pay/paymentOrderDetail.service";

export default async (req, res, _next) => {
    logger.info(req.body);
    await actionService(req, res);
};
