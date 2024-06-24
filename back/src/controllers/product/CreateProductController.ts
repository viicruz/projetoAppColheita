import {Request, response, Response} from 'express'
import { CreateProductService } from '../../services/product/CreateProductService';


class CreateProductController{
    async handle(req: Request, res: Response) {
        const {product_name,price } = req.body;

        const createProductService = new CreateProductService();
       
              
       
       
        const product = await createProductService.execute({product_name,price});


        return res.json({product})
    }
}

export{CreateProductController};