import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    username: string;
    email: string;
    password: string;
    phone: string
}



class CreateUserService {

    async execute({ username, email, password, phone }: UserRequest) {

        if (!email) {
            throw new Error("E-mail não enviado");
        }


        const UserAlreadyExists = await prismaClient.user.findFirst({

            where: {
                email: email
            }
        })

        if (UserAlreadyExists) {
            throw new Error("E-mail já cadastrado");
        }


        const senhaHash = await hash(password, 8)
        const user = await prismaClient.user.create({

            data: {
                username: username,
                email: email,
                password: senhaHash,
                phone: phone
            },
            select: {
                id: true,
                username: true,
                email: true,
                phone: true
            }
        })

        return user;
    }
}
export { CreateUserService }