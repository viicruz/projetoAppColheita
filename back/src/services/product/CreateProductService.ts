import prismaClient from "../../prisma";

interface ProductRequest{
    product_name: string;
    price:number;
      


}
 class CreateProductService{

         

    async execute({product_name,price}: ProductRequest){


        if(price <= 0 || price == null){
         throw new Error('Valor do produto Invalido!');
        }


             const product = await prismaClient.product.create({
                data:{
                    product_name: product_name, 
                    price:price
                   },
                select:{
                    product_name:true,
                    price:true
                }
            
            });
         
        
        return product;
    }
}    

export {CreateProductService}