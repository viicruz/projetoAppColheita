import { Request,Response } from "express";
import { SearchCepService } from "../../services/collaborator/SearchCepService";

class SearchCepController{

async handle(req:Request,res:Response){
    const {cep} = req.body;

    const searchCepService = new SearchCepService();

    const search = await searchCepService.execute(cep);

    return res.json(search);
}


}

export{SearchCepController}