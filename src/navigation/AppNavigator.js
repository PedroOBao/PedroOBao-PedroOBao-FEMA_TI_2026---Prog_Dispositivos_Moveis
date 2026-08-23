import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dumbbell, House, TrendingUp, User } from 'lucide-react-native';

import InicioScreen from '../screens/InicioScreen.js';
import PerfilScreen from '../screens/PerfilScreen.js';
import DetalhesScreen from '../screens/DetalhesScreen.js';
import SignPage from '../screens/SignPage.js';
import LoginScreen from '../screens/LoginScreen.js';
import CadastroScreen from '../screens/CadastroScreen.js';
import ProgressoScreen from '../screens/ProgressoScreen.js';
import CriarTreinoScreen from '../screens/CriarTreinoScreen.js';
import TreinosScreen from '../screens/TreinosScreen.js';
import TreinoDetalhesScreen from '../screens/TreinoDetalhesScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: '#FD1843',
                tabBarInactiveTintColor: '#ffffff',

                tabBarStyle: {
                    backgroundColor: '#222222',
                    height: 110,
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={InicioScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <House size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Treinos"
                component={TreinosScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Dumbbell size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Progresso"
                component={ProgressoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TrendingUp size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <User size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="SignPage">
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignPage"
                component={SignPage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cadastro"
                component={CadastroScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Detalhes"
                component={DetalhesScreen}
                options={{ title: 'Detalhes do produto' }}
            />

            <Stack.Screen
                name="CriarTreino"
                component={CriarTreinoScreen}
                options={{ title: 'Criar treino', headerStyle: { backgroundColor: '#222222' }, headerTintColor: '#FFF9FA' }}
            />

            <Stack.Screen
                name="Treinos"
                component={TreinosScreen}
                options={{ title: 'Meus treinos', headerStyle: { backgroundColor: '#222222' }, headerTintColor: '#FFF9FA' }}
            />

            <Stack.Screen
                name="TreinoDetalhes"
                component={TreinoDetalhesScreen}
                options={{ title: 'Elementos do treino', headerStyle: { backgroundColor: '#222222' }, headerTintColor: '#FFF9FA' }}
            />
        </Stack.Navigator>
    );
}