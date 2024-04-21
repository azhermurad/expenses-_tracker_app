import { View, Text, StyleSheet } from 'react-native';
import { GlobalColors } from '../../constants/colors';
const ExpenseSummary = ({ title, expenses }) => {
    const total = expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>$ {total.toFixed(2)}</Text>
        </View>
    );
};
export default ExpenseSummary;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalColors.primary50,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        elevation: 4,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: GlobalColors.primary500,
    },
});



// delete butthon not show when add new expenses;
// when no expense found showo some message to user