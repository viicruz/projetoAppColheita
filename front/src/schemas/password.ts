//* Libraries imports
import z from "zod";

export const password = z
  .string({
    invalid_type_error: "Senha inválida",
    required_error: "Senha é obrigatória"
  })
  .min(6, {
    message: "Senha deve ter no mínimo 6 caracteres"
  })
  .max(255, {
    message: "Senha deve ter no máximo 255 caracteres"
  });