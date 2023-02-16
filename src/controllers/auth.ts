import { logingUserService, registerNewUser } from 'business/auth';
import { Request, Response } from 'express';
import { handleHttp } from 'app/utils/error.handle';
import { createUserService } from 'business/user';

export const loginController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await logingUserService(body);
    if (responseUser === 'PASSWORD_NOT_VALID') {
      res.status(403);
      res.send(responseUser);
    } else if (responseUser === 'NOT_FOUND_USER') {
      res.status(404);
      res.send(responseUser);
    } else {
      res.send(responseUser);
    }
  } catch (e) {
    handleHttp(res, 'ERROR_CREATING_USER');
  }
};

export const signupController = async ({ body }: Request, res: Response) => {
  try {
    const createUserResponse = await createUserService(body);
    res.send(createUserResponse);
  } catch (e) {
    handleHttp(res, 'ERROR_CREATING_USER');
  }
};
