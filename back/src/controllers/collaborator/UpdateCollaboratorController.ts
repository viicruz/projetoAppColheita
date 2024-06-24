import { Request,Response } from "express";
import { UpdateCollaboratorService } from "../../services/collaborator/UpdateCollaboratorService";


class UpdateCollaboratorController{


    async handle(req:Request,res:Response){
        
        const {id,name,cpf,rg,address,cep,phone,birth_date} = req.body;

        const updateCollaboratorService = new UpdateCollaboratorService();
        const col = await updateCollaboratorService.execute({id,name,cpf,rg,address,cep,phone,birth_date});
        
        return res.json(col);

    }
}

export{UpdateCollaboratorController}