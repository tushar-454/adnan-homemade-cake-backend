import { NextFunction, Request, Response } from 'express';
import { createUserService } from '../../services/user/create_user';

const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, photo } = req.body;
    const new_user = await createUserService({ name, email, photo });
    const user = new_user?.toObject();
    delete user.password;
    delete user.is_deleted;
    delete user.createdAt;
    delete user.updatedAt;
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    next(error);
  }
};

export { createUser };
