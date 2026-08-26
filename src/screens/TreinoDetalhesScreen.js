import { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { ArrowRight, Check, Clock3, Dumbbell, Play, RotateCcw } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWorkouts } from '../context/WorkoutContext';

export default function TreinoDetalhesScreen({ route }) {
    const { workout } = route.params;
    const { completeWorkout } = useWorkouts();
    const [isStarted, setIsStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const currentElement = workout.elements[currentIndex];
    const isLastElement = currentIndex === workout.elements.length - 1;

    useEffect(() => {
        if (!isStarted || currentElement?.type !== 'rest' || remainingSeconds <= 0) {
            return undefined;
        }

        const timer = setInterval(() => {
            setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [currentElement?.type, isStarted, remainingSeconds]);

    function startWorkout() {
        const firstElement = workout.elements[0];
        setCurrentIndex(0);
        setRemainingSeconds(firstElement.type === 'rest' ? Number(firstElement.duration) || 0 : 0);
        setIsStarted(true);
    }

    function advanceExercise() {
        if (isLastElement) {
            completeWorkout(workout);
            setIsStarted(false);
            Alert.alert('Treino concluído', 'Seu progresso foi atualizado.');
            return;
        }

        const nextElement = workout.elements[currentIndex + 1];
        setCurrentIndex((index) => index + 1);
        setRemainingSeconds(nextElement.type === 'rest' ? Number(nextElement.duration) || 0 : 0);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainder = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${remainder}`;
    }

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 36 }}>
                {!isStarted ? (
                    <>
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
                        <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl bg-rosa px-5 py-4" onPress={startWorkout}>
                            <Play size={19} color="white" fill="white" />
                            <Text className="ml-2 text-base font-bold text-white">Iniciar treino</Text>
                        </Pressable>
                    </>
                ) : (
                    <>
                        <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Em andamento</Text>
                        <Text className="mt-2 text-3xl font-bold text-branco">{workout.name}</Text>
                        <Text className="mt-2 text-base text-cinza">Elemento {currentIndex + 1} de {workout.elements.length}</Text>

                        <View className="mt-8 items-center rounded-3xl bg-preto2 px-6 py-10">
                            <View className={`rounded-2xl p-4 ${currentElement.type === 'rest' ? 'bg-white/10' : 'bg-rosa/15'}`}>
                                {currentElement.type === 'rest' ? <Clock3 size={32} color="#FFF9FA" /> : <Dumbbell size={32} color="#FD1843" />}
                            </View>
                            <Text className="mt-6 text-center text-2xl font-bold text-white">
                                {currentElement.type === 'rest' ? 'Intervalo de descanso' : currentElement.name}
                            </Text>
                            {currentElement.type === 'rest' ? (
                                <Text className="mt-5 text-6xl font-bold tracking-widest text-rosa">{formatTime(remainingSeconds)}</Text>
                            ) : (
                                <Text className="mt-3 text-base text-cinza">Faça o exercício no seu ritmo.</Text>
                            )}
                        </View>

                        <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl bg-rosa px-5 py-4" onPress={advanceExercise}>
                            {isLastElement ? <Check size={19} color="white" /> : <ArrowRight size={19} color="white" />}
                            <Text className="ml-2 text-base font-bold text-white">{isLastElement ? 'Concluir treino' : 'Avançar exercício'}</Text>
                        </Pressable>
                        <Pressable className="mt-4 flex-row items-center justify-center rounded-2xl border border-white/15 px-5 py-4" onPress={startWorkout}>
                            <RotateCcw size={17} color="#bcbcbc" />
                            <Text className="ml-2 font-bold text-cinza">Reiniciar treino</Text>
                        </Pressable>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
