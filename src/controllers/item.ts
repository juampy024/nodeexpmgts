import { Request, Response } from 'express';
import { handleHttp } from 'app/utils/error.handle';

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GETTING_ITEMS');
  }
};

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GETTING_ITEM');
  }
};

const createItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, 'ERROR_CREATING_ITEM');
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATING_ITEM');
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETING_ITEM');
  }
};

export { getItem, getItems, createItem, updateItem, deleteItem };
