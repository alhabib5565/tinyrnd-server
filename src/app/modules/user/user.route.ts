import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getSingleUser);
router.patch('/edit/:id', UserController.editUser);
router.delete('/delete/:id', UserController.deleteUser);

export const userRouter = router;
