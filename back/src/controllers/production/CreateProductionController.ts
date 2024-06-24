import {request, Request,response,Response}from 'express';
import { CreateProductionService } from '../../services/production/CreateProductionService';

class CreateProductionController{
    async handle(req:Request, res:Response){
        
        const{quantity, total_value,production_date,collaborator,product}=req.body;
        const createProductionService = new CreateProductionService();
        const production= createProductionService.execute({quantity,total_value, production_date,collaborator,product});

        return res.json(production);
    }
}
export {CreateProductionController}