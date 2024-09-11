import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { mainMenuRouter } from '../modules/mainMenu/mainMenu.route';

const router = express.Router();

router.use('/users', userRouter);
router.use('/main-menus', mainMenuRouter);

export const Routes = router;
