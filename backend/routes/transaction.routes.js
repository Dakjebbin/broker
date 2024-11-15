import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';

const router = express.Router();

router.post("/fund", validateUsers, )

export default router