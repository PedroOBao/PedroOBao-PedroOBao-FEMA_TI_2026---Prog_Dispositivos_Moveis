import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const produtos = [
    {
        id: 1,
        nome: 'Notebook Gamer',
        preco: 'R$ 4.500,00',
        descricao: 'Produto indicado para estudos, jogos e desenvolvimento.'
    },
    {
        id: 2,
        nome: 'Mouse sem fio',
        preco: 'R$ 120,00',
        descricao: 'Mouse simples para uso diario no computador.'
    },
    {
        id: 3,
        nome: 'Teclado mecanico',
        preco: 'R$ 280,00',
        descricao: 'Teclado confortavel para programacao.'
    }
];

export default function ProdutosScreen({ navigation }) {
    
    return (
        <SafeAreaView className="flex-1 bg-slate-100">
            <ScrollView className="flex-1 px-5 pt-6">
                <Text className="text-3xl font-bold text-slate-900">
                    Produtos
                </Text>
                <Text className="mt-2 text-base text-slate-600">
                    Toque em um produto para abrir a tela de detalhes.
                </Text>
                <View className="mt-5 gap-4 pb-8">
                    {produtos.map((produto) => (
                        <Pressable
                            key={produto.id}
                            className="rounded-2xl bg-white p-5 shadow-sm active:bg-slate-200"
                            onPress={() => navigation.navigate('Detalhes', { produto })}
                        >
                            <Text className="text-xl font-bold text-slate-900">
                                {produto.nome}
                            </Text>
                            <Text className="mt-1 text-base font-semibold text-blue-600">
                                {produto.preco}
                            </Text>
                            <Text className="mt-2 text-sm leading-5 text-slate-600">
                                {produto.descricao}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}