import { Text, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bell, User } from 'lucide-react-native';

export default function Central({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <View className="px-5 pt-6">
                <Pressable
                    className="rounded-2xl bg-rosa px-5 py-4 active:bg-branco"
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text className="text-center text-base font-bold text-white">
                        Início
                    </Text>
                </Pressable>
            </View>

            <View className="px-5 pt-6">
                <Pressable
                    className="rounded-2xl bg-rosa px-5 py-4 active:bg-branco"
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text className="text-center text-base font-bold text-white">
                        Perfil
                    </Text>
                </Pressable>
            </View>

            <View className="px-5 pt-6">
                <Pressable
                    className="rounded-2xl bg-rosa px-5 py-4 active:bg-branco"
                    onPress={() => navigation.navigate('Produtos')}
                >
                    <Text className="text-center text-base font-bold text-white">
                        Produtos
                    </Text>
                </Pressable>
            </View>

            <View className="px-5 pt-6">
                <Pressable
                    className="rounded-2xl bg-rosa px-5 py-4 active:bg-branco"
                    onPress={() => navigation.navigate('SignPage')}
                >
                    <Text className="text-center text-base font-bold text-white">
                        SignPage
                    </Text>
                </Pressable>
            </View>








        </SafeAreaView>
    );
}
