import { Router } from 'express';
import { signupController, loginController } from 'controllers/auth';

const router = Router();
//** http://localhost:3002/auth/signup */

//** http://localhost:3002/auth/login */

router.post('/signup', signupController);
router.post('/login', loginController);

export { router };
