import {Request,Response} from 'express';
import { UpdateProductionService } from '../../services/production/UpdateProductionService';

class UpdateProductionController{
    async handle(req:Request,res:Response){

        const {id, quantity,total_value, production_date} = req.body;

        const updateProductionController= new UpdateProductionService();
        const production = await updateProductionController.execute({id,quantity, total_value ,production_date});

        return res.json(production);
    }
}

export{UpdateProductionController}

