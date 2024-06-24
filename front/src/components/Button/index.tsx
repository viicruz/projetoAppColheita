import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    label: string;
}

export function Button({label, ...rest}:Props){
    return(
        <TouchableOpacity {...rest} className="w-96 h-10 bg-green-700 rounded-md justify-center items-center">
            <Text className="text-white font-semibold text-xl">{label}</Text>
        </TouchableOpacity>
    )
}