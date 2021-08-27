import * as _ from "lodash";

const logger = require("@/util/logger")("wrap");

export default {
    action(actionFunc) {
        return async (req, res, next) => {
            try {
                return await actionFunc(req, res, next);
            } catch (e) {
                return next(e);
            }
        };
    },
    error(error, req, res, next) {
        logger.error(error);
        res.status(200);
        res.json({
            code: -2,
            message: _.get(error, "response.data.message", "网络繁忙，请稍后重试"),
        });
    },
};
