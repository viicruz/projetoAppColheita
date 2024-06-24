//* Libraries imports
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";


export default function Home() {
    return (
        <>
            <NavBar />
            <View className="flex flex-col items-center justify-center flex-1 p-4 bg-white z-10 -top-6 rounded-3xl">
                <ScrollView className="flex-1 w-full" contentContainerStyle={{ paddingTop: 32 }}>
                    <View className="w-full min-h-svh">
                    </View>
                    <Text>página de home</Text>
                </ScrollView>
            </View>
        </>
    )
}