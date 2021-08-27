import "module-alias/register"; // 导入时支持别名
import { ToolUser } from "@entity/ToolUser.entity";
import * as process from "process";
import getConnectionHelper from "@entity/datebaseHelper";

// 先执行 yarn typeorm schema:sync -c nodejs_backend

(async () => {
    const connection = await getConnectionHelper("nodejs_backend");
    const toolUserRepository = connection.getRepository(ToolUser);
    const tryFindAdmin: ToolUser = await toolUserRepository
        .createQueryBuilder("user")
        .where("user.username = :username ", { username: "admin" })
        .getOne();
    console.log(tryFindAdmin);
    if (!tryFindAdmin) {
        console.log("没有 admin 用户，新增");
        const adminUser = toolUserRepository.create({
            username: "admin",
            password_hash: " ",
        });
        await toolUserRepository.save(adminUser);
    }
    process.exit(0);
})();
