import express from "express";
import { signup, login } from "../controllers/auth.js";

const router = express.Router();

// router.post("/signup", signup); - commentata perche' non vogliamo che gli utenti possano creare un account da soli, ma solo i "direttori della formula 1"
router.post("/login", login);

export default router;