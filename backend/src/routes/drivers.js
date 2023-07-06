import express from "express";
import { createDriver, getDrivers, getDriver } from "../controllers/drivers.js";
import { sessionChecked } from "../middlewares/sessionChecked.js";


const router = express.Router();

// router.post("/", createDriver); - commentata perche' non vogliamo che gli utenti possano creare un piloti da soli, ma solo i "direttori della formula 1"
router.get("/", sessionChecked, getDrivers);
router.get("/:id", sessionChecked, getDriver);

export default router;
