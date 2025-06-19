import express from 'express';
import { registerUser, loginUser, dashboard } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/dashboard',protect,dashboard);


export default router;