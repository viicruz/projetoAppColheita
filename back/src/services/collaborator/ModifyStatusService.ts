import prismaClient from "../../prisma";

interface ColRequest {
    id: string;
}

class ModifyStatusService {
    async execute({ id }: ColRequest) {
        
        const existingCol = await prismaClient.collaborator.findUnique({
            where: {
                id: id
            },
            select: {
                status: true 
            }
        });

        
        if (existingCol) {
            
            const newStatus = !existingCol.status; 

            
        const col =  await prismaClient.collaborator.update({
                where: {
                    id: id
                },
                data: {
                    status: newStatus
                }
            });

           return col;
        } else {
            throw new Error("Colaborador inexistente !")
        }
    
    }

}

export { ModifyStatusService };
