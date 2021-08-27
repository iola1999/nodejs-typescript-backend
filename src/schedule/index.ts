import getConnectionHelper from "@entity/datebaseHelper";
import {ToolUser} from "@entity/ToolUser.entity";

const schedule = require("node-schedule");
const logger = require("@util/logger")("schedule/index");

const scheduleCronstyle = () => {
    //每 30 秒定时执行一次:
    schedule.scheduleJob("*/30 * * * * *", async () => {
        const connection = await getConnectionHelper("nodejs_backend");
        const toolUserRepository = connection.getRepository(ToolUser);
        const userList = await toolUserRepository.find();
        logger.info("scheduleCronstyle", JSON.stringify(userList));
    });
};

scheduleCronstyle();
module.exports = {};
