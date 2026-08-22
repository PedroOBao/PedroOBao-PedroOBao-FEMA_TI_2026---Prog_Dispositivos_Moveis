import { Text, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bell, User } from 'lucide-react-native';

export default function InicioScreen({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <View className="flex-1 px-5 pt-6">

                <View className="flex-row items-center justify-between">

                    <View className="flex-row items-center mb-3">
                        <Pressable onPress={() => navigation.navigate('Perfil')}>
                            <Image
                                source={require('../assets/Apedra.jpg')}
                                className="mr-1 h-12 w-12 rounded-full"
                            />
                        </Pressable>

                        <Text className="ml-3 text-xl text-white">
                            Usuário
                        </Text>
                    </View>

                    <View className="flex-row items-center">
                        <Pressable 
                        className="mr-4"
                        onPress={() => navigation.navigate('SignPage')}>
                            <Bell size={24} color="white" />
                        </Pressable>
                    </View>
                </View>

                <Text className="text-4xl mb-10 text-branco font-bold">
                    Boa noite Pedro!
                </Text>

                <Text className="text-xl text-cinza">
                    Treino de hoje
                </Text>

                <View className="mt-2 rounded-2xl bg-preto2 p-5 shadow-sm">
                    <Text className="text-xl font-bold text-white">
                        O que veremos hoje?
                    </Text>
                    <Text className="mt-3 text-base leading-6 text-white">
                        Vamos criar uma navegacao com abas, pilha de telas
                        e passagem de parametros entre telas.
                    </Text>
                    <Pressable
                        className="mt-5 rounded-2xl bg-rosa px-5 py-4 active:bg-branco"
                        onPress={() => navigation.navigate('Produtos')}
                    >
                        <Text className="text-center text-base font-bold text-white">
                            Ver produtos
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}
