import { Router } from "express";
import { orderRouter } from "../routes/order.routes.js";
import { productRouter } from "../routes/product.routes.js";

export const globalRouter = Router();

globalRouter.use("/order", orderRouter);
globalRouter.use("/product", productRouter);
