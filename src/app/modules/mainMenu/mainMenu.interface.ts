export type TMainMenu = {
  label: string;
  URL: string;
  order: number;
  dropdown?: TMainMenu[];
};
