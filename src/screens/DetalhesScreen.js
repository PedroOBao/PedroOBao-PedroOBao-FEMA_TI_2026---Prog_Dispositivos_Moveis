import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesScreen({ route, navigation }) {

    const { produto } = route.params;
    
    return (
        <SafeAreaView className="flex-1 bg-slate-100">
            <View className="flex-1 px-5 pt-6">
                <View className="rounded-3xl bg-white p-6 shadow-sm">
                    <Text className="text-sm font-bold uppercase tracking-widest text-blue-600">
                        Produto selecionado
                    </Text>
                    <Text className="mt-3 text-3xl font-bold text-slate-900">
                        {produto.nome}
                    </Text>
                    <Text className="mt-2 text-xl font-bold text-blue-600">
                        {produto.preco}
                    </Text>
                    <Text className="mt-4 text-base leading-6 text-slate-600">
                        {produto.descricao}
                    </Text>
                </View>
                <Pressable
                    className="mt-6 rounded-2xl bg-slate-900 px-5 py-4 active:bg-slate-700"
                    onPress={() => navigation.goBack()}
                >
                    <Text className="text-center text-base font-bold text-white">
                        Voltar
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}