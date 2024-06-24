import prismaClient from "../../prisma";


interface CollaboratorRequest {
    id: string;
}

class DeleteCollaboratorService {

    async execute({ id }: CollaboratorRequest) {
        const existingCollaborator = await prismaClient.collaborator.findUnique({
          where: {
            id: id,
          },
        });
    
        if (!existingCollaborator) {
          throw new Error("Colaborador não encontrado!");
        }
    
        await prismaClient.collaborator.delete({
          where: {
            id: id,
          },
        });
      }
}

export { DeleteCollaboratorService }