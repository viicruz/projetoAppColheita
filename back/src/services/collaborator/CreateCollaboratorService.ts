import prismaClient from "../../prisma";

interface ColRequest{

    name:string;
    cpf:string;
    rg:string;
    address:string;
    cep:number;
    phone:string;
    birth_date : Date;
    

}
class CreateCollaboratorService{
     async execute({name,cpf,rg,address,cep,phone,birth_date}:ColRequest){

        if(!cpf || !rg ){
            throw new Error("CPF ou RG não enviado !!");
        }
        if (!isValidCpf(cpf)) {
            throw new Error("CPF inválido");
          }

         const col = await prismaClient.collaborator.findFirst({
            where:{
                cpf:cpf
            }
         })

         if(col){
            throw new Error("Colaborador já cadastrado !!");
        }

        const collaborator = await prismaClient.collaborator.create({
            data:{
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


        return collaborator;




     }
}

export{CreateCollaboratorService}

function isValidCpf(cpf) {
    // Verifica se o CPF tem o tamanho correto
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Cálculo do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    let firstCheckDigit = 11 - (sum % 11);
    if (firstCheckDigit === 10 || firstCheckDigit === 11) {
      firstCheckDigit = 0;
    }
  
    // Cálculo do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    let secondCheckDigit = 11 - (sum % 11);
    if (secondCheckDigit === 10 || secondCheckDigit === 11) {
      secondCheckDigit = 0;
    }
  
    // Verifica se os dígitos verificadores correspondem aos informados
    return (
      parseInt(cpf[9]) === firstCheckDigit && parseInt(cpf[10]) === secondCheckDigit
    );
  }