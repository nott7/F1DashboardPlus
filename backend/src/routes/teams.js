//TODO

import express from 'express';
import { getTeams, getTeam} from '../controllers/teams.js';

const router = express.Router();

router.get('/', getTeams);
router.get('/:id', getTeam);

export default router;
