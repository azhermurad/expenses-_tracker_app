import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressableIcon from '../components/UI/PressableIcon';
import { GlobalColors } from '../constants/colors';
import { ExpenseContext } from '../store/context/store';
import ManageExpenseForm from '../components/manageExpense/ManageExpenseForm';
import database from '@react-native-firebase/database';
import Loader from '../components/UI/Loader';

const ManageExpense = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const expenseCtx = useContext(ExpenseContext);
    const id = route.params?.expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: !!id ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, id]);

    const ExpenseHandler = (expense) => {
        // create new

        if (!!id) {
            setIsLoading(true);
            database()
                .ref('/expenses/' + id)
                .update(expense)
                .then(() => {
                    setIsLoading(false);
                    expenseCtx.updateExpense(id, expense);
                    navigation.goBack();
                });

            return;
        }

        // we have to create in the database
        const expenseRef = database().ref('/expenses').push();
        expenseRef
            .set({ ...expense, createdAt: expense.createdAt.toString() })
            .then((a) => {
                expenseCtx.expenseHandler({ ...expense, id: expenseRef.key });
            })
            .catch((e) => {
                console.log(e);
            });
        navigation.goBack();
    };
    const deleteExpenseHandler = async () => {
        await database()
            .ref('/expenses/' + id)
            .remove();
        expenseCtx.deleteExpense(id);
        navigation.goBack();
    };

    const CancelExpenseHandler = () => {
        navigation.goBack();
    };

    if (isLoading) {
        return <Loader />;
    }
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
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
