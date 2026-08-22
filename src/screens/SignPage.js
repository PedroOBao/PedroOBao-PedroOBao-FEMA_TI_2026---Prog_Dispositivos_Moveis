import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//COMPONENTES
import Button from '../components/buttom';

export default function SignPage() {
    return (
        <SafeAreaView className="flex-1 bg-[#151515]">

            <View className="h-[70%]">
                <ImageBackground
                    source={require('../assets/Apedra.jpg')}
                    resizeMode="cover"
                    className="h-full w-full"
                >
                    <View className="absolute inset-0 bg-black/20" />

                    <View className="absolute bottom-5 left-5">
                        <Text className="text-7xl font-bold text-white">
                            Dumbell
                        </Text>

                        <Text className="mt-1 w-[280px] text-xs leading-4 text-white">
                            Seu aplicativo de treino preferido.
                        </Text>
                    </View>
                </ImageBackground>
            </View>

            <View className="flex-[3] items-center justify-center bg-[#151515]">

                <Button className="mb-3">Entrar</Button>
                <Button>Criar conta</Button>

            </View>

        </SafeAreaView>
    );
}