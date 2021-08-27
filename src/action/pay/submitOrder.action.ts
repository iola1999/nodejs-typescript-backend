const logger = require("@util/logger")("request/submitOrder");
import actionService from "@/service/pay/submitOrder.service";

export default async (req, res, _next) => {
    logger.info(req.body);
    await actionService(req, res);
};
