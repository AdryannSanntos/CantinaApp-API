import { Order } from './../../models/Order';
import { Response, Request } from 'express';
import { io } from '../../..';

export async function createOrder(req: Request, res: Response){
  try {
    const { table, products } = req.body;

    const order = await Order.create({table, products});
    const orderDetails = await order.populate('products.product');

    io.emit('@NewOrder', orderDetails);
    res.status(201).json(order);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}

