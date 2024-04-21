import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressableIcon from '../components/UI/PressableIcon';
import { GlobalColors } from '../constants/colors';
import { ExpenseContext } from '../store/context/store';
import ManageExpenseForm from '../components/manageExpense/ManageExpenseForm';
import { CreateExpense } from '../util/https/expenses';
import database from '@react-native-firebase/database';

const ManageExpense = ({ navigation, route }) => {
    const expenseCtx = useContext(ExpenseContext);
    const id = route.params?.expenseId;

    console.log(database())

    useLayoutEffect(() => {
        navigation.setOptions({
            title: !!id ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, id]);

    const ExpenseHandler = (expense) => {
        // create new
      
        if (!!id) {
            expenseCtx.updateExpense(id, expense);
            navigation.goBack();
            return;
        }

        CreateExpense()
        expenseCtx.expenseHandler(expense);
        navigation.goBack();
    };
    const deleteExpenseHandler = () => {
        expenseCtx.deleteExpense(id);
        navigation.goBack();
    };
    
    const CancelExpenseHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.actionButtonWraper,
                    {
                        borderBottomWidth: 2,
                        marginBottom: 10,
                        paddingBottom: 10,
                        borderBottomColor: 'white',
                    },
                ]}
            >
                <PressableIcon
                    name='trash'
                    color={'red'}
                    size={32}
                    pressable={deleteExpenseHandler}
                />
            </View>

            <ManageExpenseForm
                CancelExpenseHandler={CancelExpenseHandler}
                id={id}
                onsubmit={ExpenseHandler}
            />
        </View>
    );
};

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.primary700,
        padding: 20,
    },
    actionButtonWraper: {
        marginVertical:20,           
        flexDirection: 'row',
        justifyContent: 'center',
    },
});













