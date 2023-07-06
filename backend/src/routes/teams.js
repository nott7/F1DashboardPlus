import express from "express";
import { getTeams, getTeam } from "../controllers/teams.js";
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
} from "../controllers/employees.js";
import {
  addScoutedDriver,
  updateScoutedDriver,
  deleteScoutedDriver,
  getScoutedDrivers,
} from "../controllers/scoutedDrivers.js";
import { sessionChecked } from "../middlewares/sessionChecked.js";
import { checkTeamAccess } from "../middlewares/checkTeamAccess.js";

const router = express.Router();

router.get("/", sessionChecked, getTeams);
router.get("/:id", sessionChecked, getTeam);

router.post("/:id/employees", sessionChecked, checkTeamAccess, addEmployee);
router.put(
  "/:id/employees/:employeeID",
  sessionChecked,
  checkTeamAccess,
  updateEmployee
);
router.delete(
  "/:id/employees/:employeeID",
  sessionChecked,
  checkTeamAccess,
  deleteEmployee
);
router.get("/:id/employees", sessionChecked, checkTeamAccess, getEmployees);

router.post(
  "/:id/scoutedDrivers",
  sessionChecked,
  checkTeamAccess,
  addScoutedDriver
);
router.put(
  "/:id/scoutedDrivers/:scoutedDriverID",
  sessionChecked,
  checkTeamAccess,
  updateScoutedDriver
);
router.delete(
  "/:id/scoutedDrivers/:scoutedDriverID",
  sessionChecked,
  checkTeamAccess,
  deleteScoutedDriver
);
router.get(
  "/:id/scoutedDrivers",
  sessionChecked,
  checkTeamAccess,
  getScoutedDrivers
);

export default router;
