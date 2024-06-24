//* Libraries imports
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//* Components imports
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

//* Hooks imports
import { useLogin, credentialsSchema, type Credentials } from "@/hooks/use-login";

export default function Login() {
    const form = useForm<Credentials>({
        resolver: zodResolver(credentialsSchema)
    });

    const navigation = useRouter();
    const login = useLogin();

    const handleNavigation = () => {
        navigation.push("register/");
    }

    const handleLogin = (data: Credentials) => {
        login.mutate(data, {
            onSuccess: () => {
                Alert.alert("Sucesso", "Login realizado com sucesso");
                navigation.push("/home")
            },
            onError: (error) => {
                Alert.alert("Erro", error.message);
            }
        });
    }

    return (
        <View className="flex flex-col items-center justify-center flex-1 p-4">
            <ScrollView className="flex-1 w-full" contentContainerStyle={{ paddingTop: 32 }}>
                <View className="items-center w-full">
                    <Image
                        source={require('../../assets/Logo2.png')}
                        style={{ width: 200 / 2, height: 242 / 2 }}
                    />
                </View>
                <View className="w-full">
                    <Text className="text-xl font-bold">Acessar</Text>
                </View>
                <View className="flex flex-col w-full gap-2">
                    <View className="w-full">
                        <Text className="pb-2 text-lg font-medium text-neutral-700">Email</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Coloque seu email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                        <Text className="text-red-500">{form.formState.errors?.email?.message || ""}</Text>
                    </View>
                    <View className="w-full">
                        <Text className="pb-2 text-lg font-medium text-neutral-700">Senha</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Coloque seu email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry
                                />
                            )}
                            name="password"
                        />
                        <Text className="text-red-500">{form.formState.errors?.password?.message || ""}</Text>
                        <View className="items-end w-full pt-2 pr-11">
                            <TouchableOpacity>
                                <Text className="text-green-800">Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="items-center pt-16">
                    <Button label="Entrar" onPress={form.handleSubmit(handleLogin)} />
                </View>
                <View className="items-center justify-center w-full pt-5">
                    <Text>Não tem uma conta ainda?</Text>

                    <TouchableOpacity onPress={handleNavigation}>
                        <Text className="text-green-800">Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}