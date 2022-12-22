import { Router } from "express";
import ProductsRoutes from "./users/users.routes";

const router = Router();

router.use("/products", ProductsRoutes);

export default router;
