import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

interface ProductionRequest {
    collaborator: string;
    product: string;
    quantity: number;
    total_value: number;
    production_date: Date;
}

class CreateProductionService {
    async execute({ collaborator, product, quantity, total_value, production_date }: ProductionRequest) {


        if (quantity <= 0) {
            throw new Error("A quantidade deve ser maior que zero.");
        }
        if (total_value <= 0) {
            throw new Error("O valor total deve ser maior que zero.");
        }
        if (!production_date) {
            throw new Error("A data de produção é inválida.");
        }


        try {
            
            const production = await prismaClient.production.create({
                data: {
                    quantity: quantity,
                    total_value: total_value,
                    production_date: production_date,
                    collaborator: { connect: { id: collaborator } }, 
                    product: { connect: { id: product } } 
                },
                select: {
                    id: true,
                    quantity: true,
                    production_date: true,
                }
            })
            return production;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao criar a produção.");
            }
        }
    }
}

export { CreateProductionService };
