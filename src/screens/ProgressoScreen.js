import { ScrollView, Text, View } from 'react-native';
import { Award, CalendarDays, Check, Flame, Goal, TrendingUp } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../context/AuthContext';
import { useWorkouts } from '../context/WorkoutContext';

export default function ProgressoScreen() {
    const { user } = useAuth();
    const { getWorkoutStats } = useWorkouts();
    const stats = getWorkoutStats();
    const firstName = user?.name?.split(' ')[0] || 'Atleta';
    const progress = Math.min(stats.completedThisWeek / stats.weeklyGoal, 1);
    const totalTime = stats.totalMinutes >= 60 ? `${Math.floor(stats.totalMinutes / 60)}h ${stats.totalMinutes % 60}min` : `${stats.totalMinutes} min`;

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 36 }} showsVerticalScrollIndicator={false}>
                <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Sua evolução</Text>
                <Text className="mt-2 text-3xl font-bold text-white">Progresso, {firstName}</Text>
                <Text className="mt-2 text-base leading-6 text-cinza">Pequenas sessões constroem grandes resultados.</Text>

                <View className="mt-7 flex-row gap-3">
                    <View className="flex-1 rounded-2xl bg-preto2 p-4">
                        <View className="h-10 w-10 items-center justify-center rounded-xl bg-rosa/15">
                            <Flame size={21} color="#FD1843" fill="#FD1843" />
                        </View>
                        <Text className="mt-4 text-2xl font-bold text-white">{stats.currentStreak}</Text>
                        <Text className="mt-1 text-sm text-cinza">dias seguidos</Text>
                    </View>
                    <View className="flex-1 rounded-2xl bg-preto2 p-4">
                        <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <TrendingUp size={21} color="#FFF9FA" />
                        </View>
                        <Text className="mt-4 text-2xl font-bold text-white">{totalTime}</Text>
                        <Text className="mt-1 text-sm text-cinza">tempo treinado</Text>
                    </View>
                </View>

                <View className="mt-4 rounded-2xl bg-preto2 p-5">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-lg font-bold text-white">Meta semanal</Text>
                            <Text className="mt-1 text-sm text-cinza">{stats.completedThisWeek} de {stats.weeklyGoal} treinos concluídos</Text>
                        </View>
                        <View className="h-14 w-14 items-center justify-center rounded-full border-4 border-rosa">
                            <Text className="text-sm font-bold text-white">{Math.round(progress * 100)}%</Text>
                        </View>
                    </View>
                    <View className="mt-5 flex-row justify-between">
                        {stats.weekDays.map((day, index) => (
                            <View key={day.date} className="items-center">
                                <View className={`h-9 w-9 items-center justify-center rounded-full ${day.done ? 'bg-rosa' : index === 6 ? 'border border-rosa bg-rosa/10' : 'bg-white/10'}`}>
                                    {day.done ? <Check size={16} color="white" /> : <Text className="text-xs font-bold text-cinza">{day.label}</Text>}
                                </View>
                                <Text className="mt-2 text-xs text-cinza">{day.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <Text className="mt-7 text-xl font-bold text-white">Destaques</Text>
                <View className="mt-3 gap-3">
                    <View className="flex-row items-center rounded-2xl border border-white/10 bg-preto2 p-4">
                        <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#40321f]"><Award size={22} color="#F5C451" /></View>
                        <View className="ml-3 flex-1"><Text className="font-bold text-white">Constância em alta</Text><Text className="mt-1 text-sm text-cinza">Você treinou 3 semanas seguidas.</Text></View>
                    </View>
                    <View className="flex-row items-center rounded-2xl border border-white/10 bg-preto2 p-4">
                        <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#263C40]"><Goal size={22} color="#8BD8D0" /></View>
                        <View className="ml-3 flex-1"><Text className="font-bold text-white">Próximo marco</Text><Text className="mt-1 text-sm text-cinza">Complete mais 1 treino para sua meta.</Text></View>
                    </View>
                </View>

                <View className="mt-7 flex-row items-center rounded-2xl bg-rosa p-5">
                    <CalendarDays size={24} color="white" />
                    <View className="ml-3 flex-1"><Text className="font-bold text-white">Seu melhor treino é o próximo</Text><Text className="mt-1 text-sm text-white/75">Mantenha o ritmo hoje.</Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
