import { Text, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bell, User } from 'lucide-react-native';

export default function SignPage({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-preto">
            <View className="flex-1 px-5 pt-6">

                <Text className="text-2xl my-4 text-branco font-bold">
                    Notificações
                </Text>
            </View>
        </SafeAreaView>
    );
}
