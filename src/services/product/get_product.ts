import { IProduct, Product } from '../../models/Product';

const getProductService = async (): Promise<IProduct[] | undefined> => {
  try {
    const products = await Product.find().select({
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
