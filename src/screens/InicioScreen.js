import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    Bell,
    ChevronRight,
    Clock3,
    Dumbbell,
    Flame,
    Play,
    Target,
} from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import { useWorkouts } from '../context/WorkoutContext';

export default function InicioScreen({ navigation }) {
    const { user } = useAuth();
    const { getWorkoutStats } = useWorkouts();
    const stats = getWorkoutStats();
    const firstName = user?.name?.split(' ')[0] || 'Atleta';

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 28 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="px-5 pt-6">

                    <View className="flex-row items-center justify-between">

                        <View className="mb-3 flex-row items-center">
                            <Pressable onPress={() => navigation.navigate('Perfil')}>
                                <Image
                                    source={require('../assets/Apedra.jpg')}
                                    className="mr-1 h-12 w-12 rounded-full"
                                />
                            </Pressable>

                            <View className="ml-3">
                                <Text className="text-xs uppercase tracking-widest text-cinza">
                                    Dumbell
                                </Text>
                                <Text className="mt-1 text-xl font-bold text-white">
                                    {firstName}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center">
                            <Pressable
                                className="mr-1 rounded-full bg-preto2 p-3"
                                onPress={() => navigation.navigate('SignPage')}
                            >
                                <Bell size={21} color="white" />
                            </Pressable>
                        </View>
                    </View>

                    <Text className="mb-6 mt-6 text-4xl font-bold leading-tight text-branco">
                        Boa noite, {firstName}!
                    </Text>

                    <View className="rounded-3xl bg-rosa p-5">
                        <View className="flex-row items-start justify-between">
                            <View className="flex-1 pr-4">
                                <Text className="text-sm font-bold uppercase tracking-widest text-white/70">
                                    Treino de hoje
                                </Text>
                                <Text className="mt-3 text-3xl font-bold text-white">
                                    Força e potência
                                </Text>
                                <Text className="mt-2 text-sm leading-5 text-white/80">
                                    Um treino completo para evoluir seu desempenho.
                                </Text>
                            </View>
                            <View className="rounded-2xl bg-white/20 p-3">
                                <Dumbbell size={25} color="white" />
                            </View>
                        </View>

                        <View className="mt-6 flex-row items-center justify-between rounded-2xl bg-black/15 px-4 py-3">
                            <View className="flex-row items-center">
                                <Clock3 size={17} color="white" />
                                <Text className="ml-2 text-sm font-semibold text-white">
                                    45 min
                                </Text>
                            </View>
                            <View className="flex-row items-center">
                                <Target size={17} color="white" />
                                <Text className="ml-2 text-sm font-semibold text-white">
                                    6 exercícios
                                </Text>
                            </View>
                            <View className="rounded-full bg-white p-2">
                                <Play size={15} color="#FD1843" fill="#FD1843" />
                            </View>
                        </View>
                    </View>

                    <View className="mt-7 flex-row items-center justify-between">
                        <Text className="text-xl font-bold text-white">
                            Seu progresso
                        </Text>
                        <Text className="text-sm font-semibold text-rosa">Esta semana</Text>
                    </View>

                    <View className="mt-3 rounded-2xl bg-preto2 p-4">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <View className="rounded-xl bg-rosa/15 p-3">
                                    <Flame size={23} color="#FD1843" fill="#FD1843" />
                                </View>
                                <View className="ml-3">
                                    <Text className="text-sm text-cinza">Sequência atual</Text>
                                    <Text className="mt-1 text-2xl font-bold text-white">{stats.currentStreak} dias</Text>
                                </View>
                            </View>
                            <Text className="text-3xl font-bold text-white">{stats.completedThisWeek}/{stats.weeklyGoal}</Text>
                        </View>
                        <View className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                            <View className="h-full rounded-full bg-rosa" style={{ width: `${Math.min(stats.completedThisWeek / stats.weeklyGoal, 1) * 100}%` }} />
                        </View>
                        <Text className="mt-2 text-xs text-cinza">{stats.completedThisWeek >= stats.weeklyGoal ? 'Meta semanal concluída' : `Mais ${stats.weeklyGoal - stats.completedThisWeek} treino${stats.weeklyGoal - stats.completedThisWeek === 1 ? '' : 's'} para bater sua meta`}</Text>
                    </View>

                    <View className="mt-7 flex-row items-center justify-between">
                        <Text className="text-xl font-bold text-white">Próximos treinos</Text>
                        <ChevronRight size={21} color="#bcbcbc" />
                    </View>

                    <View className="mt-3 flex-row items-center rounded-2xl border border-white/10 bg-preto2 p-4">
                        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#4B3029]">
                            <Text className="text-2xl">A</Text>
                        </View>
                        <View className="ml-3 flex-1">
                            <Text className="text-base font-bold text-white">Full body</Text>
                            <Text className="mt-1 text-sm text-cinza">Amanhã  •  30 min</Text>
                        </View>
                        <Text className="text-sm font-semibold text-rosa">Iniciante</Text>
                    </View>

                    <View className="mt-3 flex-row items-center rounded-2xl border border-white/10 bg-preto2 p-4">
                        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#263C40]">
                            <Text className="text-2xl">B</Text>
                        </View>
                        <View className="ml-3 flex-1">
                            <Text className="text-base font-bold text-white">Mobilidade</Text>
                            <Text className="mt-1 text-sm text-cinza">Quinta-feira  •  20 min</Text>
                        </View>
                        <Text className="text-sm font-semibold text-rosa">Recuperação</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
