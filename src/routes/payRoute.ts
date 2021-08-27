import * as express from "express";
import wrap from "@util/wrap";

import submitOrder from "@/action/pay/submitOrder.action";
import handlePaymentNotify from "@/action/pay/handlePaymentNotify.action";
import paymentOrderDetail from "@/action/pay/paymentOrderDetail.action";

const router = express.Router();

router.post("/submitOrder", wrap.action(submitOrder)); // http://127.0.0.1:3333/api/v1/pay/submitOrder
router.post("/handlePaymentNotify", wrap.action(handlePaymentNotify)); // http://127.0.0.1:3333/api/v1/pay/handlePaymentNotify
router.get("/paymentOrderDetail", wrap.action(paymentOrderDetail)); // http://127.0.0.1:3333/api/v1/pay/paymentOrderDetail

export default router;
