import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Clock3, Dumbbell, Plus, Save, Trash2 } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useWorkouts } from '../context/WorkoutContext';

export default function CriarTreinoScreen({ navigation }) {
    const { addWorkout } = useWorkouts();
    const [name, setName] = useState('');
    const [exerciseName, setExerciseName] = useState('');
    const [restDuration, setRestDuration] = useState('60');
    const [elements, setElements] = useState([]);
    function addExercise() {
        const trimmedName = exerciseName.trim();

        if (!trimmedName) {
            Alert.alert('Falta o exercício', 'Digite o nome do exercício para adicionar.');
            return;
        }

        setElements((currentElements) => [
            ...currentElements,
            { id: Date.now().toString(), type: 'exercise', name: trimmedName },
        ]);
        setExerciseName('');
    }

    function addRest() {
        const duration = restDuration.trim();

        if (!duration) {
            Alert.alert('Falta o intervalo', 'Informe a duração do intervalo.');
            return;
        }

        setElements((currentElements) => [
            ...currentElements,
            { id: Date.now().toString(), type: 'rest', duration },
        ]);
    }

    function removeElement(id) {
        setElements((currentElements) => currentElements.filter((element) => element.id !== id));
    }

    function saveWorkout() {
        const trimmedName = name.trim();

        if (!trimmedName || elements.length === 0) {
            Alert.alert('Complete seu treino', 'Defina um nome e adicione pelo menos um elemento.');
            return;
        }

        addWorkout({ name: trimmedName, elements });
        navigation.replace('Treinos');
    }

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 36 }}>
                <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Novo treino</Text>
                <Text className="mt-2 text-3xl font-bold text-branco">Monte sua sessão</Text>
                <Text className="mt-2 text-base leading-6 text-cinza">
                    Organize os exercícios e os intervalos do seu jeito.
                </Text>

                <Text className="mt-7 text-sm font-bold text-cinza">Nome do treino</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Ex.: Pernas e glúteos"
                    placeholderTextColor="#777777"
                    className="mt-2 rounded-2xl bg-preto2 px-4 py-4 text-base text-white"
                />

                <View className="mt-6 rounded-2xl bg-preto2 p-4">
                    <View className="flex-row items-center">
                        <View className="rounded-xl bg-rosa/15 p-3">
                            <Dumbbell size={22} color="#FD1843" />
                        </View>
                        <Text className="ml-3 text-lg font-bold text-white">Adicionar exercício</Text>
                    </View>
                    <TextInput
                        value={exerciseName}
                        onChangeText={setExerciseName}
                        placeholder="Nome do exercício"
                        placeholderTextColor="#777777"
                        className="mt-4 rounded-xl border border-white/10 px-4 py-3 text-white"
                    />
                    <Pressable className="mt-3 flex-row items-center justify-center rounded-xl bg-rosa px-4 py-3" onPress={addExercise}>
                        <Plus size={18} color="white" />
                        <Text className="ml-2 font-bold text-white">Adicionar exercício</Text>
                    </Pressable>
                </View>

                <View className="mt-4 rounded-2xl bg-preto2 p-4">
                    <View className="flex-row items-center">
                        <View className="rounded-xl bg-white/10 p-3">
                            <Clock3 size={22} color="#FFF9FA" />
                        </View>
                        <Text className="ml-3 text-lg font-bold text-white">Adicionar intervalo</Text>
                    </View>
                    <View className="mt-4 flex-row items-center">
                        <TextInput
                            value={restDuration}
                            onChangeText={setRestDuration}
                            keyboardType="number-pad"
                            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-white"
                        />
                        <Text className="ml-3 text-sm text-cinza">segundos</Text>
                    </View>
                    <Pressable className="mt-3 flex-row items-center justify-center rounded-xl border border-white/15 px-4 py-3" onPress={addRest}>
                        <Plus size={18} color="white" />
                        <Text className="ml-2 font-bold text-white">Adicionar intervalo</Text>
                    </Pressable>
                </View>

                <Text className="mt-7 text-xl font-bold text-white">Elementos do treino</Text>
                {elements.length === 0 ? (
                    <View className="mt-3 items-center rounded-2xl border border-dashed border-white/15 px-5 py-8">
                        <Text className="text-center text-sm leading-5 text-cinza">Seu treino ainda está vazio. Adicione exercícios e intervalos acima.</Text>
                    </View>
                ) : (
                    <View className="mt-3 gap-2">
                        {elements.map((element, index) => (
                            <View
                                key={element.id}
                                className="flex-row items-center rounded-xl bg-preto2 px-4 py-3"
                            >
                                <Text className="w-7 text-sm font-bold text-cinza">{index + 1}</Text>
                                <View className="h-8 w-8 items-center justify-center">
                                    {element.type === 'exercise' ? <Dumbbell size={18} color="#FD1843" /> : <Clock3 size={18} color="#bcbcbc" />}
                                </View>
                                <Text className="ml-3 flex-1 text-base text-white">
                                    {element.type === 'exercise' ? element.name : `Intervalo de ${element.duration} segundos`}
                                </Text>
                                <Pressable onPress={() => removeElement(element.id)}>
                                    <Trash2 size={18} color="#bcbcbc" />
                                </Pressable>
                            </View>
                        ))}
                    </View>
                )}

                <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl bg-rosa px-5 py-4" onPress={saveWorkout}>
                    <Save size={19} color="white" />
                    <Text className="ml-2 text-base font-bold text-white">Salvar treino</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
