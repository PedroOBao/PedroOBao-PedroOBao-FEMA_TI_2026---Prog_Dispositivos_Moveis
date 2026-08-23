import { Alert, Pressable, Text, View } from 'react-native';
import { LogOut, Mail, UserRound } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../context/AuthContext';

export default function PerfilScreen({ navigation }) {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert('Sair da conta?', 'Você poderá entrar novamente quando quiser.', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', style: 'destructive', onPress: signOut },
        ]);
    }
    
    return (
        <SafeAreaView className="flex-1 bg-preto">
            <View className="flex-1 px-5 pt-6">
                <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Seu espaço</Text>
                <Text className="mt-2 text-3xl font-bold text-white">Perfil</Text>
                <View className="mt-7 rounded-3xl bg-preto2 p-6 shadow-sm">
                    <View className="h-20 w-20 items-center justify-center rounded-full bg-rosa">
                        <UserRound size={34} color="white" />
                    </View>
                    <Text className="mt-5 text-2xl font-bold text-branco">
                        {user?.name || 'Atleta'}
                    </Text>
                    <View className="mt-3 flex-row items-center">
                        <Mail size={16} color="#bcbcbc" />
                        <Text className="ml-2 text-sm text-cinza">{user?.email || 'Sem e-mail cadastrado'}</Text>
                    </View>
                </View>
                <Pressable className="mt-4 flex-row items-center rounded-2xl border border-white/10 bg-preto2 p-4" onPress={handleSignOut}>
                    <LogOut size={20} color="#FD1843" />
                    <Text className="ml-3 text-base font-bold text-white">Sair da conta</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}