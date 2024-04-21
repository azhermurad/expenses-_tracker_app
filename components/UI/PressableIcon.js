import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PressableIcon = ({ name, color, size = 20, pressable }) => {
    return (
        <Pressable
            onPress={pressable}
            style={({ pressed }) => pressed && { opacity: 0.5 }}
        >
            <View style={{ borderRadius: 2 }}>
                <Ionicons name={name} size={size} color={color} />
            </View>
        </Pressable>
    );
};

export default PressableIcon;
