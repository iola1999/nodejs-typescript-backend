import "reflect-metadata"; // TypeORM
import "module-alias/register"; // 导入时支持别名
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import routes from "@/routes/routes";

const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/api/v1", routes);

const port: string | number = process.env.PORT || 3333;
app.listen(port);
console.log(`Listening on http://127.0.0.1:${port}`);
// start schedule jobs
const jobs = require("./schedule/index");
console.log("schedule jobs started", jobs);

export default app;
