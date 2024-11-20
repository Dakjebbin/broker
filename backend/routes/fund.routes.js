import express from 'express';
import { fundData } from '../controllers/fund.controllers.js';
import { validateUsers } from '../middlewares/validate.users.js';

const router = express.Router();

router.post("/fund", validateUsers, fundData)

export default router