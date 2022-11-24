import { Response, Request } from 'express';
import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response){
  try {
    const imagePath = req.file?.filename;
    const { name, description, category, price, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}
