import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/course", getBook);

export default router;