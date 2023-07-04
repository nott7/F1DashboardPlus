
import express from 'express';
import { getTeams, getTeam} from '../controllers/teams.js';
import { addEmployee, updateEmployee, deleteEmployee, getEmployees } from '../controllers/employees.js';
import { addScoutedDriver, updateScoutedDriver, deleteScoutedDriver, getScoutedDrivers } from '../controllers/scoutedDrivers.js';

const router = express.Router();

router.get('/', getTeams);
router.get('/:id', getTeam);

router.post('/:id/employees', addEmployee);
router.put('/:id/employees/:employeeID', updateEmployee);
router.delete('/:id/employees/:employeeID', deleteEmployee);
router.get('/:id/employees', getEmployees);

router.post('/:id/scoutedDrivers', addScoutedDriver);
router.put('/:id/scoutedDrivers/:scoutedDriverID', updateScoutedDriver);
router.delete('/:id/scoutedDrivers/:scoutedDriverID', deleteScoutedDriver);
router.get('/:id/scoutedDrivers', getScoutedDrivers);


export default router;
