//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import z from "zod";

//* Schemas imports
import { password } from "@/schemas/password";
import { email } from "@/schemas/email";

//* Utils imports
import { publicApi } from "@/utils/public-api";

export const credentialsSchema = z.object({
  email: email,
  password: password,
});

export type Credentials = z.infer<typeof credentialsSchema>;

const apiResponse = z.object({
  id: z.string(),
  nome: z.string(),
  email: z.string().email(),
  token: z.string(),
});

async function doLogin(credentials: Credentials) {
  const url = "/session"
  try {
    const response = await publicApi.post({
      url,
      body: credentials,
      schema: apiResponse
    });

    // Save token in AsyncStorage 
    await AsyncStorage.setItem("token", response.token);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useLogin() {
  return useMutation({
    mutationFn: doLogin
  });
}