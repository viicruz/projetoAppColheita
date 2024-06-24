import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

import {sign} from 'jsonwebtoken';

interface AuthRequest{
    email:string;
    password:string;
}


class AuthUserService{

    async execute({email,password}:AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user)
        {
         throw new Error("Usuario ou senha incorreta!");
        }

        const senhaMatch = await compare(password,user.password);

        if(!senhaMatch)
        {
         throw new Error("Usuario ou senha incorretos!");
        }


        const token = sign(
            {
                nome : user.username,
                usuario : user.email
            },
            process.env.JWT_SECRET,
            {
              subject:user.id,
              expiresIn:'1d'
            }
        )

        return {
            id:user.id,
            nome:user.username,
            email:user.email,
            token:token
        }
        
    }

    


   
}

export {AuthUserService}