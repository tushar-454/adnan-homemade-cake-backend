import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../middlewares/verify_token';
import { findReviewByProperty } from '../../services/review/find_review_by_property';
import { UpdateReviewInput } from '../../validation/review/update_review';

const updateReview = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { reviewId } = req.params;
    const { is_deleted } = req.body as UpdateReviewInput;
    const { _id } = req.user!;
    const review = await findReviewByProperty('_id', reviewId);
    if (!review) {
      res.status(400).json({
        success: false,
        error: 'Resource not found',
      });
      return;
    }
    console.log(_id, review.user);
    if (review.user.toString() !== _id.toString()) {
      res.status(403).json({
        success: false,
        error: 'forbidden',
      });
      return;
    }
    review.is_deleted = is_deleted ?? review.is_deleted;
    await review.save();

    res.status(200).json({
      status: true,
      message: 'Resource updated',
    });
  } catch (error) {
    next(error);
  }
};

export { updateReview };
