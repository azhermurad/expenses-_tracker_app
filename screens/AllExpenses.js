import { Text, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/context/store';
const AllExpenses = () => {
    const {expenses}= useContext(ExpenseContext)
    return <ExpensesOutput expenses={expenses} title="Total"/>;
};

export default AllExpenses;
