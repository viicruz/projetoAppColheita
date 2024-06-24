import { Request, Response } from "express";
import { ModifyStatusService } from "../../services/collaborator/ModifyStatusService";

class ModifyStatusController{

    async handle(req:Request,res:Response){

        const {id} = req.body;

        const modifyStatusService = new ModifyStatusService();

        const col = modifyStatusService.execute({id});

        return res.json(col);
    }
}
export {ModifyStatusController}
