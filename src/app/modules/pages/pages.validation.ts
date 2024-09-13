import { z } from 'zod';

const createPageValidationSchema = z.object({
  pageName: z.string().min(1, 'Page name is required'),
  path: z.string().min(1, 'Path is required'),
});

export const PageValidation = {
  createPageValidationSchema,
};
