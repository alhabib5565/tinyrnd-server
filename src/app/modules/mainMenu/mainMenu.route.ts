import express from 'express';
import { MainMenuController } from './mainMenu.controller';
import { validateRequestPayload } from '../../middleware/validateRequestPayload';
import { MainMenuValidation } from './mainMenu.validation';

const router = express.Router();

router.post(
  '/create-main-menu',
  validateRequestPayload(MainMenuValidation.createMainMenuValidation),
  MainMenuController.createMainMenu,
);
router.get('/', MainMenuController.getAllMainMenu);
router.get('/:id', MainMenuController.getSingleMainMenu);
router.patch('/:id', MainMenuController.editMainMenu);
router.delete('/:id', MainMenuController.deleteMainMenu);

export const mainMenuRouter = router;
