import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { Check, Clock3, Dumbbell } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWorkouts } from '../context/WorkoutContext';

export default function TreinoDetalhesScreen({ route }) {
    const { workout } = route.params;
    const { completeWorkout } = useWorkouts();

    function handleComplete() {
        completeWorkout(workout);
        Alert.alert('Treino concluído', 'Seu progresso foi atualizado.');
    }

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 36 }}>
                <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Treino personalizado</Text>
                <Text className="mt-2 text-3xl font-bold text-branco">{workout.name}</Text>
                <Text className="mt-2 text-base text-cinza">{workout.elements.length} elementos organizados para sua sessão.</Text>

                <View className="mt-8 gap-3">
                    {workout.elements.map((element, index) => (
                        <View key={element.id} className="flex-row items-center rounded-2xl bg-preto2 p-4">
                            <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                                <Text className="text-sm font-bold text-white">{index + 1}</Text>
                            </View>
                            <View className="ml-3 h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                                {element.type === 'exercise' ? <Dumbbell size={21} color="#FD1843" /> : <Clock3 size={21} color="#bcbcbc" />}
                            </View>
                            <View className="ml-4 flex-1">
                                <Text className="text-base font-bold text-white">
                                    {element.type === 'exercise' ? element.name : 'Intervalo de descanso'}
                                </Text>
                                <Text className="mt-1 text-sm text-cinza">
                                    {element.type === 'exercise' ? 'Exercício' : `${element.duration} segundos`}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl bg-rosa px-5 py-4" onPress={handleComplete}>
                    <Check size={19} color="white" />
                    <Text className="ml-2 text-base font-bold text-white">Concluir treino</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
