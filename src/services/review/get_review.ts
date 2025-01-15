import { IReview, Review } from '../../models/Review';

const getReviewService = async (): Promise<IReview[] | undefined> => {
  try {
    const reviews = await Review.find().select({
      createdAt: 0,
      updatedAt: 0,
    });
    return reviews || [];
  } catch (error) {
    console.log('Error in getReviewService', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { getReviewService };
