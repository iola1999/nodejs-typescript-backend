const logger = require("@util/logger")("request/");
import { generateOrderIdByTime } from "@util/datetimeUtil";

export default (req, res, next) => {
    logger.info(req.body);
    res.json({
        code: 0,
        message: "服务启动成功，" + generateOrderIdByTime("ping"),
    });
};
