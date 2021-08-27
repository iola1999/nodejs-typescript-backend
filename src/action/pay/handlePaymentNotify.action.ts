const logger = require("@util/logger")("request/handlePaymentNotify");
import actionService from "@/service/pay/handlePayMentNotify.service";

export default async (req, res, _next) => {
    logger.info(req.body);
    await actionService(req, res);
};
