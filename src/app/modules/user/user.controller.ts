import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUser(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrived successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
};
