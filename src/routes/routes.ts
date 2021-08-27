import * as express from "express";

const routes = express.Router();

import baseRoute from "./baseRoute";
import payRoute from "./payRoute";

routes.use("/base", baseRoute);
routes.use("/pay", payRoute);

export default routes;
