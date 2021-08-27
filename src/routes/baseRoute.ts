import * as express from "express";
import wrap from "@util/wrap";

import ping from "@/action/base/ping.action";
import testOrm from "@/action/base/testOrm.action";

const router = express.Router();

router.get("/ping", wrap.action(ping)); // http://127.0.0.1:3333/api/v1/base/ping
router.get("/testOrm", wrap.action(testOrm)); // http://127.0.0.1:3333/api/v1/base/testOrm

export default router;
