import { Text, View } from 'react-native';
import DATA from '../../dummy_data/data';
import ExpenseSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import { GlobalColors } from '../../constants/colors';
const ExpensesOutput = ({ expenses, title }) => {
    return (
        <>
            <View
                style={{
                    backgroundColor: GlobalColors.primary700,
                    flex: 1,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                }}
            >
                <View>
                    <ExpenseSummary title={title} expenses={expenses} />
                </View>
                {/* list of all the items from the database  */}
                {expenses.length == 0 ? (
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        No Expenses Found!!!
                    </Text>
                ) : (
                    <ExpenseList expenses={expenses} />
                )}
            </View>
        </>
    );
};

export default ExpensesOutput;
