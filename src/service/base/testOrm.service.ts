import getConnectionHelper from "@entity/datebaseHelper";
import { Request, Response } from "express";
import { ToolUser } from "@entity/ToolUser.entity";

const logger = require("@util/logger")("service/testOrm");

export default async (req: Request, res: Response) => {
    const connection = await getConnectionHelper("nodejs_backend");
    const toolUserRepository = connection.getRepository(ToolUser);
    const userList = await toolUserRepository.find();
    logger.info("toolUser allAsync", JSON.stringify(userList));
    res.json(userList);
};
