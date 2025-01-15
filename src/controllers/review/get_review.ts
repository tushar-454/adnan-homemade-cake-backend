import { NextFunction, Request, Response } from 'express';
import { getReviewService } from '../../services/review/get_review';

const getReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const reviews = await getReviewService();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    next(error);
  }
};

export { getReview };
