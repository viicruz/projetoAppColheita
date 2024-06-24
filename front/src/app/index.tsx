import { Text, View, Image, SafeAreaView } from "react-native";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";

export default function Page() {

  const navigation = useRouter();

  function handleNavigation() {
    navigation.push("/login/");
  }

  return (
    <SafeAreaView className="flex flex-col items-center justify-center flex-1">
      <View className="items-center w-full py-20">
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 300, height: 300 }}

        />
      </View>
      <View className="flex flex-col items-center justify-center w-full">
        <Text className="text-xl font-bold">Vamos começar!</Text>
        <Text className="text-sm font-medium text-center">
          Otimize sua colheita e maximize seus resultados com Harvest Management!
        </Text>

      </View >
      <View className="items-center w-full pt-20">
        <Button label="Vamos começar!" onPress={handleNavigation} />
      </View>
    </SafeAreaView>
  );
}

