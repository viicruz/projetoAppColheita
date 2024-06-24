//* Libraries imports
import z from "zod";

export const email = z
  .string({
    invalid_type_error: "Email inválido",
    required_error: "Email é obrigatório"
  })
  .email({
    message: "Email inválido"
  });