import { Response, Request } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response){
  try {
    const { icon, name } = req.body;

    const category = await Category.create({name, icon});

    res.status(201).json(category);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}
