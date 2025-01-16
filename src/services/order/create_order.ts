import { IOrder, Order } from '../../models/Order';

type TCreateOrderService = {
  order: Partial<IOrder>;
};

const createOrderService = async (order: TCreateOrderService): Promise<IOrder | undefined> => {
  const {} = order;
  try {
    const new_order = await Order.create({});
    await new_order.save();
    return new_order;
  } catch (error) {
    console.error('Error creating order:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { createOrderService };
