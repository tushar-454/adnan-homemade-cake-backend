import { Document, Schema, model } from 'mongoose';

interface ICoupon extends Document {
  _id: string;
  code: string;
  type: 'flat' | 'percentage';
  discount: number;
  quantity: number | null;
  minprice: number | null;
  startAt: number | null;
  expireAt: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

const CouponSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    type: { type: String, required: true, enum: ['flat', 'percentage'] },
    discount: { type: Number, required: true },
    quantity: { type: Number, default: null },
    minprice: { type: Number, default: null },
    startAt: { type: Number, default: null },
    expireAt: { type: Number, default: null },
  },
  { timestamps: true, versionKey: false }
);

const Coupon = model<ICoupon>('Coupon', CouponSchema);

export { Coupon, ICoupon };
