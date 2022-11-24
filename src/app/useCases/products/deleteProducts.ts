import { Product } from './../../models/Product';
import { Response, Request } from 'express';

export async function cancelProducts(req: Request, res: Response){
  try {
    const { productId } = req.params;

    await Product.findByIdAndDelete(productId);

    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
}
