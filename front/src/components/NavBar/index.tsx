//* Libraries imports
import { View, Image, Text, TouchableOpacity } from "react-native";


export default function NavBar() {
    return (
        <View className="flex flex-row h-36 w-full bg-green-600 items-center">
            <Image
                source={require('../../assets/Logo3.png')}
                style={{ width: 60, height: 60, marginTop:10 }}

            />
            <View className="flex-1">
                <Text className="color-white text-2xl">Seja bem-vindo!</Text>
                <Text className="color-white text-3xl font-bold">Cleiton</Text>
            </View>
            <View className="pr-4">
                <TouchableOpacity>
                <Image
                source={require('../../assets/Logout.png')}
                style={{ width: 30, height: 30, marginTop:10 }}

            />
            <Text className="text-white">Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}