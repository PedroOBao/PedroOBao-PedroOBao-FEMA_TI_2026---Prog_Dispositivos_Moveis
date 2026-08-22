import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { House, ShoppingBag, User, Layers } from 'lucide-react-native';

import InicioScreen from '../screens/InicioScreen.js';
import ProdutosScreen from '../screens/ProdutosScreen.js';
import PerfilScreen from '../screens/PerfilScreen.js';
import DetalhesScreen from '../screens/DetalhesScreen.js';
import SignPage from '../screens/SignPage.js';
import Central from '../screens/Central.js';

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
                name="Produtos"
                component={ProdutosScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingBag size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Central"
                component={Central}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Layers size={size} color={color} />
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
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Detalhes"
                component={DetalhesScreen}
                options={{ title: 'Detalhes do produto' }}
            />

            <Stack.Screen
                name="SignPage"
                component={SignPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}