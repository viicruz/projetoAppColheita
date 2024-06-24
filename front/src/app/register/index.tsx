//* Libraries imports
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//* Components imports
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

//* Utils imports
import { credentialsSchema, Credentials, useCreateAccount } from "@/hooks/use-create-account";

export default function Register() {
    const form = useForm<Credentials>({
        resolver: zodResolver(credentialsSchema)
    });

    const createAccount = useCreateAccount();

    const handleRegister = (data: Credentials) => {
        createAccount.mutate(data, {
            onSuccess: () => {
                Alert.alert("Usuário cadastrado com sucesso");
            },
            onError: (error) => {
                Alert.alert("Erro ao cadastrar usuário");
            }
        });
    }

    return (
        <View className="flex items-center justify-center flex-1">
            <ScrollView className="flex-1" contentContainerStyle={{ paddingTop: 32 }}>
                <View className="items-center w-full">
                    <Image
                        source={require('../../assets/Logo2.png')}
                        style={{ width: 200 / 2, height: 242 / 2 }}
                    />
                </View>

                <View className="w-full">
                    <Text className="text-2xl font-bold">Acessar</Text>
                </View>

                <View className="">
                    <View className="w-full">
                        <Text className="text-lg font-medium text-neutral-700">Nome</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Coloque seu nome"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="username"
                        />
                        <Text className="text-red-500">{form.formState.errors?.username?.message || ""}</Text>
                    </View>

                    <View className="w-full">
                        <Text className="text-lg font-medium text-neutral-700">Email</Text>
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
                        <Text className="text-lg font-medium text-neutral-700">Telefone</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Coloque seu telefone"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="phone"
                        />
                        <Text className="text-red-500">{form.formState.errors?.phone?.message || ""}</Text>
                    </View>

                    <View className="w-full">
                        <Text className="text-lg font-medium text-neutral-700">Senha</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Coloque sua senha"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry
                                />
                            )}
                            name="password"
                        />
                        <Text className="text-red-500">{form.formState.errors?.password?.message || ""}</Text>
                    </View>

                    <View className="w-full">
                        <Text className="text-lg font-medium text-neutral-700">Confirmar senha</Text>
                        <Controller
                            control={form.control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    title="Confirme sua senha"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry
                                />
                            )}
                            name="confirmPassword"
                        />
                        <Text className="text-red-500">{form.formState.errors?.confirmPassword?.message || ""}</Text>
                    </View>


                </View>
                <View className="items-center pt-4">
                    <Button label="Cadastrar" onPress={form.handleSubmit(handleRegister)} />
                </View>
            </ScrollView>
        </View>
    )
}