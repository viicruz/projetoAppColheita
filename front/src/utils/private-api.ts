//* Libraries imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spellbinder } from "spellbinder";

export async function getToken() {
  let token = await AsyncStorage.getItem("token");
  return token;
}

export const privateApi = new Spellbinder({
  baseUrl: "http://192.168.103.88:3333",
  debug: true,
  defaultHeaders: async () => {
    return {
      Authorization: `Bearer ${await getToken()}`,
      "Content-Type": "application/json",
    };
  }
});