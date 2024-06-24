import prismaClient from "../../prisma";

interface RemoveProductionRequest{
    id:string;
}

class DeleteProductionService{
    async execute({id}:RemoveProductionRequest){
        const production = await prismaClient.production.findFirst({
            where :{
                id:id
            }
        });

        if(!production){
            throw new Error("produção não encontado!!!");
            
        }


        const deleteProduction = await prismaClient.production.delete({
            where: {
              id:id
            },
          })
          return deleteProduction;

    }
}

export{DeleteProductionService}