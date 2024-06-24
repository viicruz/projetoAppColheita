import prismaClient from "../../prisma";


interface ColRequest{
    id:string;
    name:string;
    cpf:string;
    rg:string;
    address:string;
    cep:number;
    phone:string;
    birth_date : Date;
    

}
class UpdateCollaboratorService{
    async execute({id,name,cpf,rg,address,cep,phone,birth_date}:ColRequest){

        const col = await prismaClient.collaborator.findFirst({
            where :{
                id:id
            }
        });

        if(!col){
            throw new Error("Colaborador não encontado!!!");
            
        }

        const updateCol = await prismaClient.collaborator.update({
          where:{
            id:id
          }, data:{
            name:name,
            cpf:cpf,
            rg:rg,
            address:address,
            cep:cep,
            phone:phone,
            birth_date:birth_date,
            status:true
         },
           select:{
           name:true,
           address:true,
           rg:true,
           cep:true,
           phone:true,
           birth_date:true,
           cpf:true   
        }
         })

         return updateCol;

         
        
    }
}

export{UpdateCollaboratorService}