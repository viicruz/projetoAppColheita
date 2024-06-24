//* Libraries imports
import { TextInput, View, type TextInputProps } from "react-native"

interface Props extends TextInputProps {
    title: string;
}

export function Input({ title, ...rest }: Props) {
    return (
        <View className="items-center justify-center h-12 px-4 border rounded-lg w-96 border-emerald-700" >
            <TextInput
                className="w-full placeholder:color-neutral-600"
                placeholder={title}
                {...rest}
            />
        </View>
    )
}