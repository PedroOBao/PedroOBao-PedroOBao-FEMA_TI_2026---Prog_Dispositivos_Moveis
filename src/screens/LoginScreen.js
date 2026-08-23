import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Preencha seus dados', 'Informe seu e-mail e sua senha para continuar.');
            return;
        }

        signIn(email);
        navigation.replace('Tabs');
    }

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 36 }} keyboardShouldPersistTaps="handled">
                    <Pressable className="mb-12 h-11 w-11 items-center justify-center rounded-full bg-preto2" onPress={() => navigation.goBack()}>
                        <ArrowLeft size={20} color="white" />
                    </Pressable>
                    <Text className="text-sm font-bold uppercase tracking-widest text-rosa">Bem-vindo de volta</Text>
                    <Text className="mt-3 text-4xl font-bold leading-tight text-white">Entre para treinar no seu ritmo.</Text>
                    <Text className="mt-3 text-base leading-6 text-cinza">Acompanhe sua evolução e mantenha a consistência.</Text>

                    <View className="mt-10 gap-4">
                        <View className="flex-row items-center rounded-2xl bg-preto2 px-4">
                            <Mail size={19} color="#bcbcbc" />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                placeholder="Seu e-mail"
                                placeholderTextColor="#777777"
                                className="ml-3 flex-1 py-4 text-base text-white"
                            />
                        </View>
                        <View className="flex-row items-center rounded-2xl bg-preto2 px-4">
                            <LockKeyhole size={19} color="#bcbcbc" />
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                placeholder="Sua senha"
                                placeholderTextColor="#777777"
                                className="ml-3 flex-1 py-4 text-base text-white"
                            />
                        </View>
                    </View>

                    <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl bg-rosa py-4" onPress={handleLogin}>
                        <Text className="text-base font-bold text-white">Entrar</Text>
                        <ArrowRight size={19} color="white" className="ml-2" />
                    </Pressable>
                    <Pressable className="mt-6 items-center" onPress={() => navigation.navigate('Cadastro')}>
                        <Text className="text-sm text-cinza">Ainda não tem uma conta? <Text className="font-bold text-rosa">Cadastre-se</Text></Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
