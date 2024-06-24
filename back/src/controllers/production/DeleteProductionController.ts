import { Request, Response } from 'express';
import { DeleteProductionService } from '../../services/production/DeleteProductionService';



class DeleteProductionController {

    async handle(req: Request, res: Response) {

        const { id } = req.body;

        const deletePoductionService = new DeleteProductionService();
        const production = await deletePoductionService.execute({ id });

        return res.json(production);
    }
}

export { DeleteProductionController }