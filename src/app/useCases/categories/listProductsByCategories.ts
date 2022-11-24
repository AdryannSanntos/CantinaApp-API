import { Product } from './../../models/Product';
import { Response, Request } from 'express';

export async function listProductsByCategories(req: Request, res: Response){
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where('category').equals(categoryId);
    res.json(products);
  } catch (error) {
    res.json(error);
  }
}
