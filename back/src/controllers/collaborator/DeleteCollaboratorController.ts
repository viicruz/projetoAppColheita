import { Request, Response } from "express";
import { DeleteCollaboratorService } from "../../services/collaborator/DeleteCollaboratorService";

class DeleteCollaboratorController{

    async handle(req:Request,res:Response){

        const {id} = req.body;

        const deleteCollaboratorService = new DeleteCollaboratorService();

        const col = deleteCollaboratorService.execute({id});

        return res.json(col);
    }
}
export {DeleteCollaboratorController}