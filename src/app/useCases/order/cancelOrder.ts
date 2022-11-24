import { Order } from './../../models/Order';
import { Response, Request } from 'express';

export async function cancelOrder(req: Request, res: Response){
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
}
