import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalColors } from '../../constants/colors';
import dateFormate from '../../util/dateFormate';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({ item }) => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.pressableContainer}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.container, { opacity: 0.5 }]
                        : styles.container
                }
                onPress={() => {
                    navigate('ExpenseManage', { expenseId: item.id });
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={[
                            styles.textColor,
                            {
                                fontSize: 16,
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            },
                        ]}
                    >
                        {item.title}
                    </Text>
                    <Text style={styles.textColor}>
                        {dateFormate(new Date(item.createdAt))}
                    </Text>
                </View>
                <View>
                    <Text style={styles.amount}>{item.amount.toFixed(2)}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ExpenseItem;
const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalColors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
    },
    pressableContainer: {
        marginBottom: 10,
        elevation: 4,
        shadowColor: GlobalColors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        borderRadius: 6,
        overflow: 'hidden',
    },
    amount: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 6,
        color: GlobalColors.primary500,
        fontSize: 16,
        fontWeight: 'bold',
        minWidth: 90,
        // height:100,
        // width:100,
        // justifyContent:"center",
        // alignItems:"center",
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    textColor: {
        color: GlobalColors.primary50,
    },
});
