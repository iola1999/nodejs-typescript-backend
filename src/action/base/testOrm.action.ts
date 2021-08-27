const logger = require("@util/logger")("request/testOrm");
import actionService from "@/service/base/testOrm.service";

export default async (req, res, _next) => {
    logger.info(req.body);
    await actionService(req, res);
};
