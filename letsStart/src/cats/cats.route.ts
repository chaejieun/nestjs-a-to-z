import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  reactAllcat,
  readCat,
  updateCat,
  updatePartialcat,
} from "./cats.service";

// router 인스턴스를 만들고
// router를 등록해주는 것.
const router = Router();

router.get("/cats", reactAllcat);
router.get("/cats/:id", readCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialcat);
router.delete("/cats/:id", deleteCat);

// 등록한 router를 export 시켜줌
export default router;
