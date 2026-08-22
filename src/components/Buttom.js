// src/components/Button.js
import { Pressable, Text } from 'react-native';

const sizes = {
    small: 'h-10 px-4',
    medium: 'h-[45px] w-[75%]',
    large: 'h-14 w-full',
};

export default function Button({
    children,
    size = 'medium',
    className = '',
    onPress,
}) {
    return (
        <Pressable
            onPress={onPress}
            className={`items-center justify-center rounded-full ${sizes[size]} ${className}`}
        >
            <Text className="font-bold text-white">{children}</Text>
        </Pressable>
    );
}