import { Document, model, Schema } from 'mongoose';

interface IReview extends Document {
  _id: string;
  user: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  comment: string;
  is_deleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    photo: { type: String, required: true },
    comment: { type: String, required: true },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

const Review = model<IReview>('Review', ReviewSchema);

export { IReview, Review };
