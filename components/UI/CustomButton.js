import { Pressable, StyleSheet, View, Text } from 'react-native';
import { GlobalColors } from '../../constants/colors';

const CustomButton = ({
    children,
    style,
    buttonContinerStlye,
    buttonTextStyle,
    onpress
}) => {
    return (
        <View style={style}>
            <Pressable
                onPress={onpress}
                style={({ pressed }) => pressed && { opacity: 0.9 }}
            >
                <View style={[styles.constiner, buttonContinerStlye]}>
                    <Text style={[styles.butonText, buttonTextStyle]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CustomButton;
const styles = StyleSheet.create({
    constiner: {
        backgroundColor: GlobalColors.primary500,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 4,
      
    },
    butonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform:'capitalize'
    },

});
