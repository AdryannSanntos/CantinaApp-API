import { Product } from './../../models/Product';
import { Response, Request } from 'express';

export async function listProducts(req: Request, res: Response){
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json(error);
  }
}
