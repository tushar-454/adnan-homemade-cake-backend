import { IProduct, Product } from '../../models/Product';

type IProductQuery = {
  is_featured?: boolean;
  is_deleted?: boolean;
  sell_count?: { $gte: number };
  is_upcoming?: boolean;
};

const getProductService = async (props: Partial<IProduct>): Promise<IProduct[] | undefined> => {
  const { is_featured, is_deleted, sell_count, is_upcoming } = props;
  try {
    const query: IProductQuery = {};
    if (is_featured) query.is_featured = is_featured;
    if (is_deleted) query.is_deleted = is_deleted;
    if (sell_count) query.sell_count = { $gte: +sell_count };
    if (is_upcoming) query.is_upcoming = is_upcoming;

    const products = await Product.find(query as any)
      .sort({ createdAt: -1 })
      .select({
        variants: 0,
        createdAt: 0,
        updatedAt: 0,
      });
    return products || [];
  } catch (error) {
    console.log('Error in getProductService', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { getProductService };
