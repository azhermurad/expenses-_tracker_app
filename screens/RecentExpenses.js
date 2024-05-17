import ExpensesOutput from '../components/expenses/ExpensesOutput';
import React, { useContext, useEffect } from 'react';
import { ExpenseContext } from '../store/context/store';
import { useFocusEffect } from '@react-navigation/native';
const RecentExpenses = ({ navigation }) => {
    const { expenses } = useContext(ExpenseContext);
    const currentDate = new Date();
    const previousDays = new Date();
    previousDays.setDate(currentDate.getDate() - 7);

    const data = expenses.filter((expense) => {
        const createdAt = new Date(expense.createdAt);
        return createdAt > previousDays && createdAt <= currentDate;
    });

    return <ExpensesOutput expenses={data} title='Previous 7 Days' />;
};

export default RecentExpenses;
