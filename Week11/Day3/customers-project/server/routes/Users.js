import express from 'express';
const router = express.Router();

import {Register,Login} from '../controllers/Users.js';

router.post('/signup', Register);
router.post('/signin', Login);

export default router;
