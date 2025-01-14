import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../middlewares/verify_token';
import { createReviewService } from '../../services/review/create_review';
import { CreateReviewInput } from '../../validation/review/create_review';

const createReview = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const { _id, name, email, phone, photo } = req.user!;
  try {
    const { comment } = req.body as CreateReviewInput;
    const review = await createReviewService({
      user: { _id, name, email, phone, photo },
      reviewInput: { comment },
    });
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};

export { createReview };
