import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PerfilScreen() {
    
    return (
        <SafeAreaView className="flex-1 bg-preto">
            <View className="flex-1 px-5 pt-6">
                <View className="rounded-3xl bg-preto2 p-6 shadow-sm">
                    <View className="h-20 w-20 items-center justify-center rounded-full bg-rosa">
                        <Text className="text-3xl font-bold text-white">
                            D
                        </Text>
                    </View>
                    <Text className="mt-5 text-2xl font-bold text-branco">
                        Daniel
                    </Text>
                    <Text className="mt-2 text-base text-branco">
                        Esta tela representa uma area de perfil do usuario.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}