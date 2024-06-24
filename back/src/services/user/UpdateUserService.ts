import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UpdateRequest{
     id:string;
    username : string;
    email: string;
    password : string;
    phone: string;
}
class UpdateUserService{
    async execute({id,username,email,password,phone}:UpdateRequest){

        const user = await prismaClient.user.findFirst({
            where :{
                id:id
            }
        });

        if(!user){
            throw new Error("Usuário não encontado!!!");
            
        }

        const senhaHash = await hash(password,8);
        const updateUser = await prismaClient.user.update({
          where:{
            id:id
          },data:{
            username:username,
            email:email,
            password:senhaHash,
            phone:phone
          },
          select:{
            id:true,
            username:true,
            email:true,
            phone:true

          }
         })

         return updateUser;

         
        
    }
}

export{UpdateUserService}