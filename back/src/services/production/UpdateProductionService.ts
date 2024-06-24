import prismaClient from "../../prisma";

interface  UpdateRequest{
    id:string ;
    quantity :number;
    total_value: number;
    production_date: Date;
}

class UpdateProductionService{
    async execute({id ,quantity, total_value, production_date}:UpdateRequest){
        
        const production = await prismaClient.production.findFirst({
            where :{
                id:id
            }
        });

        if(!production){
            throw new Error("produção não encontado!!!");
            
        }


        const updateProduction = await prismaClient.production.update({
            where:{
              id:id
            },data:{
              quantity:quantity,
              total_value:total_value,
              production_date: production_date
            },
            select:{
              id:true,
             quantity:true,
             total_value:true,
             production_date: true
  
            }
           })

            return updateProduction;
    }
}
export{UpdateProductionService}