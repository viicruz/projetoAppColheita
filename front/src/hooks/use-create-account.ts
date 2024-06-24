//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import z from "zod";

//* Schemas imports
import { password } from "@/schemas/password";
import { email } from "@/schemas/email";
import { phone } from "@/schemas/phone";

//* Utils imports
import { publicApi } from "@/utils/public-api";

export const credentialsSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Nome inválido",
      required_error: "Nome é obrigatório"
    }),
  email: email,
  phone: phone,
  password: password,
  confirmPassword: password
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não são iguais",
  path: ["confirmPassword"]
});

export type Credentials = z.infer<typeof credentialsSchema>;

const apiResponse = z.object({});

async function createAccount(credentials: Credentials) {
  const url = "/user"
  try {
    const response = await publicApi.post({
      url,
      body: credentials,
      schema: apiResponse
    });

    console.log(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useCreateAccount() {
  return useMutation({
    mutationFn: createAccount
  });
}