import { Router } from "express";
import { padraoController } from "../controller/controller";
export const router = Router();

router.get("/", padraoController.get);
router.post("/", padraoController.post);
router.put("/", padraoController.put);
router.delete("/", padraoController.delete);
