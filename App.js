import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator.js';
import { AuthProvider } from './src/context/AuthContext';
import { WorkoutProvider } from './src/context/WorkoutContext';

export default function App() {
    return (
        <AuthProvider>
            <WorkoutProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </WorkoutProvider>
        </AuthProvider>
    );
}
