import { View } from 'react-native';
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
                <ExpenseList expenses={expenses} />
            </View>
        </>
    );
};

export default ExpensesOutput;
