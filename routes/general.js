import express from 'express';
import { getUser } from '../contollers/general.js';
const router = express.Router();

router.get('/user/:id', getUser);

export default router;