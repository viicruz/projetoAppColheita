import prismaClient from "../../prisma";


interface ProductRequest {
    id: string;
    product_name: string;
    price: number;
}

class UpdateProductService {

    async execute({ id, product_name, price }: ProductRequest) {


        const productexists = await prismaClient.product.findUnique({
            where: {
                id: id
            }
        });

        if(!productexists){
            throw new Error('Produto não cadastrado seu arrombado!!!');
        }

        const product = await prismaClient.product.update({
            where:{
                id:id
            },
            data:{
                product_name:product_name,
                price:price
            },
            select:{
                product_name:true,
                price:true
            }
        })

        return product;




    }





}

export { UpdateProductService }