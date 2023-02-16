import { Request, Response } from 'express';
import { handleHttp } from 'app/utils/error.handle';
import { createUserService, getUserByIdService } from 'business/user';

const getUserById = async ({ params }: Request, res: Response) => {
  try {
    console.log('paso por el controlador');
    const { id } = params;
    const responseUser = await getUserByIdService(id);
    if (responseUser) res.send(responseUser);
  } catch (e) {
    handleHttp(res, 'ERROR_GETTING_USER', e);
  }
};

const getusers = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GETTING_USERS');
  }
};

const createuser = async ({ body }: Request, res: Response) => {
  try {
    const createUserResponse = await createUserService(body);
    res.send(createUserResponse);
  } catch (e) {
    handleHttp(res, 'ERROR_CREATING_USER');
  }
};

const updateuser = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATING_USER');
  }
};

const deleteuser = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETING_USER');
  }
};

export { getUserById, getusers, createuser, updateuser, deleteuser };
