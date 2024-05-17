import { Text, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/context/store';
import database from '@react-native-firebase/database';
import Loader from '../components/UI/Loader';
const AllExpenses = () => {
    const [isLoading, setIsLoading]= useState(true)
    const { expenses,setExpense } = useContext(ExpenseContext);

   
    useEffect(() => {
        database()
            .ref('/expenses')
            .once('value', (snapshot) => {
                const response = snapshot.val();
                let data = [];
                for (const key in response) {
                    let newValue = { id: key, ...response[key] };
                    data.push(newValue);
                }
               setIsLoading(false)
               setExpense(data)
            });
    }, []);
    if(isLoading){
        return <Loader/>
    }
    // we have to fetch all teh data from firebase

    return <ExpensesOutput expenses={expenses} title='Total' />;
};


export default AllExpenses;
