import { TMainMenu } from './mainMenu.interface';
import { MainMenu } from './mainMenu.model';

const createMainMenu = async (payload: TMainMenu) => {
  const menuCount = await MainMenu.estimatedDocumentCount();
  payload.order = menuCount + 1 || 1;
  payload.URL = payload.URL.split(' ').join('-').toLowerCase();

  const result = await MainMenu.create(payload);
  return result;
};

const getAllMainMenu = async () => {
  const result = await MainMenu.find();
  return result;
};

const getSingleMainMenu = async (id: string) => {
  const result = await MainMenu.findById(id);
  return result;
};

const editMainMenu = async (id: string, payload: Partial<TMainMenu>) => {
  const result = await MainMenu.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteMainMenu = async (id: string) => {
  const result = await MainMenu.findByIdAndDelete(id);
  return result;
};

export const MainMenuService = {
  createMainMenu,
  getAllMainMenu,
  getSingleMainMenu,
  editMainMenu,
  deleteMainMenu,
};
