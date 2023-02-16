import { Router, Request, Response } from 'express';
import { createuser, deleteuser, getUserById, getusers, updateuser } from 'controllers/user';

const router = Router();

/**
 * http://localhost:3001/users [GET]
 */

router.get('/', getusers);
router.get('/:id', getUserById);
router.post('/', createuser);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser);

export { router };
