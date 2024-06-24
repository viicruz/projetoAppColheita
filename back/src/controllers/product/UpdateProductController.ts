import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";



class UpdateProductController{


async handle(req:Request,res:Response){

const {id,product_name,price} = req.body;

const updateProductservice = new UpdateProductService();

const product = await updateProductservice.execute({id,product_name,price});

return res.json(product);

}


}

export{UpdateProductController}
