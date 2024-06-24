import { Request,Response } from "express";
import { CreateCollaboratorService } from "../../services/collaborator/CreateCollaboratorService";

class CreateCollaboratorController{

async handle(req:Request,res:Response){

    const {name,cpf,rg,address,cep,phone,birth_date} = req.body

    const  createCollaboratorService = new CreateCollaboratorService();
    const col = await createCollaboratorService.execute({name,cpf,rg,address,cep,phone,birth_date});

    return res.json(col)

}

}

export{CreateCollaboratorController}