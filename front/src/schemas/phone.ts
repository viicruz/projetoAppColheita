//* Libraries imports
import z from "zod";

export const phone = z
  .string({
    invalid_type_error: "Telefone inválido",
    required_error: "Telefone é obrigatório"
  })
  .min(11, {
    message: "Telefone deve ter no mínimo 11 caracteres"
  })
  .max(11, {
    message: "Telefone deve ter no máximo 11 caracteres"
  });