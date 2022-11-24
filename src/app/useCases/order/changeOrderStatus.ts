import { Order } from './../../models/Order';
import { Response, Request } from 'express';

export async function changeOrderStatus(req: Request, res: Response){
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
      return res.status(400).json({
        error: 'Escolha um desses valores: [\'WAITING\', \'IN_PRODUCTION\', \'DONE\']'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
}
