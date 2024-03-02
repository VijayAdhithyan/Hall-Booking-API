import express from "express";
import {
  createHall,
  hallBooking,
  hallList,
  customersList,
} from "../controllers/hall.controller.js";

const router = express.Router();

router.post("/hall/create", createHall);
router.post("/hall/booking", hallBooking);
router.post("/booked/date", hallList);
router.post("/booked/customers", customersList);

export default router;
