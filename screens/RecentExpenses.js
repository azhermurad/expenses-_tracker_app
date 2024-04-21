import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/context/store';
const RecentExpenses = () => {
    const { expenses } = useContext(ExpenseContext);
    const currentDate = new Date();
    const previousDays = new Date();
    previousDays.setDate(currentDate.getDate() - 7);

    const data = expenses.filter(
        (expense) =>
            expense.createdAt > previousDays && expense.createdAt <= currentDate
    );
    console.log(data);

    return <ExpensesOutput expenses={data} title='Previous 7 Days' />;
};

export default RecentExpenses;
