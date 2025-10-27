import express from "express";
import {
  addResult,
  getAllResults,
  getResultById,
  getResultsByClass,
  updateResult,
  deleteResult,
  search,
} from "./resultcontroller.js";

const router = express.Router();

router.post("/addresult", addResult);
router.get("/results", getAllResults);
router.get("/result/:id", getResultById);
router.get("/results/class/:class1", getResultsByClass); // new route for class filter
router.put("/update/result/:id", updateResult);
router.delete("/delete/result/:id", deleteResult);
// resultroute.js (Fix)
router.get("/results/search", search);
export default router;
