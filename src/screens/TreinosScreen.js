import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { ChevronRight, Dumbbell, Plus, Trash2 } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useWorkouts } from '../context/WorkoutContext';

export default function TreinosScreen({ navigation }) {
    const { workouts, removeWorkout } = useWorkouts();

    function confirmRemoveWorkout(workout) {
        Alert.alert('Remover treino?', `"${workout.name}" será removido da sua biblioteca.`, [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Remover', style: 'destructive', onPress: () => removeWorkout(workout.id) },
        ]);
    }

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 36 }}>
                <View className="flex-row items-end justify-between">
                    <View className="flex-1 pr-4">
                        <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Minha biblioteca</Text>
                        <Text className="mt-2 text-3xl font-bold text-branco">Meus treinos</Text>
                    </View>
                    <Pressable className="rounded-full bg-rosa p-3" onPress={() => navigation.navigate('CriarTreino')}>
                        <Plus size={22} color="white" />
                    </Pressable>
                </View>
                <Text className="mt-2 text-base leading-6 text-cinza">Acesse suas sessões e continue evoluindo.</Text>

                {workouts.length === 0 ? (
                    <View className="mt-8 items-center rounded-3xl bg-preto2 px-6 py-10">
                        <View className="rounded-2xl bg-rosa/15 p-4">
                            <Dumbbell size={30} color="#FD1843" />
                        </View>
                        <Text className="mt-5 text-center text-xl font-bold text-white">Sua biblioteca está vazia</Text>
                        <Text className="mt-2 text-center text-sm leading-5 text-cinza">Crie seu primeiro treino e tenha tudo organizado em um só lugar.</Text>
                        <Pressable className="mt-6 rounded-xl bg-rosa px-5 py-3" onPress={() => navigation.navigate('CriarTreino')}>
                            <Text className="font-bold text-white">Criar primeiro treino</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View className="mt-7 gap-3">
                        {workouts.map((workout) => (
                            <Pressable key={workout.id} className="flex-row items-center rounded-2xl bg-preto2 p-4" onPress={() => navigation.navigate('TreinoDetalhes', { workout })}>
                                <View className="h-14 w-14 items-center justify-center rounded-2xl bg-rosa">
                                    <Dumbbell size={25} color="white" />
                                </View>
                                <View className="ml-4 flex-1">
                                    <Text className="text-lg font-bold text-white">{workout.name}</Text>
                                    <Text className="mt-1 text-sm text-cinza">{workout.elements.length} elementos</Text>
                                </View>
                                <Pressable className="mr-2 rounded-full p-2" onPress={() => confirmRemoveWorkout(workout)} hitSlop={8}>
                                    <Trash2 size={19} color="#bcbcbc" />
                                </Pressable>
                                <ChevronRight size={21} color="#bcbcbc" />
                            </Pressable>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
