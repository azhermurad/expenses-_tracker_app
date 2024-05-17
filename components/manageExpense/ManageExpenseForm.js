import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ManageExpenseInput from './ManageExpenseInput';
import CustomButton from '../UI/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ExpenseContext } from '../../store/context/store';
import { CreateExpense } from '../../util/https/expenses';

const ManageExpenseForm = ({ CancelExpenseHandler, id, onsubmit }) => {
    const expenseCtx = useContext(ExpenseContext);

    const [inputValue, setInputValue] = useState({
        amount: {
            value: '',
            error: '',
        },
        title: {
            value: '',
            error: '',
        },
        createdAt: {
            value: '',
            error: '',
        },
    });
    useEffect(() => {
        if (!!id) {
            let { amount, createdAt, title } = expenseCtx.expenses.filter(
                (item) => item.id == id
            )[0];

            createdAt = new Date(createdAt);
            setInputValue({
                amount: {
                    value: '' + amount,
                    error: '',
                },
                title: {
                    value: title,
                    error: '',
                },
                createdAt: {
                    value: `${createdAt.getFullYear()}-${
                        createdAt.getMonth() + 1
                    }-${createdAt.getDate()}`,
                    error: '',
                },
            });
        }
    }, [id]);
    const inputValueHandler = (inputName, value) => {
        setInputValue({
            ...inputValue,
            [inputName]: {
                value: value,
                error: '',
            },
        });
    };

    const expenseSubmitHander = () => {
        const data = {
            amount: +inputValue.amount.value,
            title: inputValue.title.value,
            createdAt: new Date(inputValue.createdAt.value).toDateString(),
        };

        //  validation
        // check that the amount should be number and not less than 0 or equal
        // check the date should be not invalid 'Invalid Date'
        // the title should not be empty
        const { amount, title, createdAt } = data;
        const amountValid = !isNaN(amount) && amount > 0;
        const dateValid = createdAt !== 'Invalid Date';
        const titleValid = title.trim().length > 0;
        // const dateValid =
        if (!amountValid || !dateValid || !titleValid) {
            setInputValue({
                amount: {
                    value: inputValue.amount.value,
                    error: !amountValid
                        ? 'Amount should be greater than 0'
                        : '',
                },
                title: {
                    value: inputValue.title.value,
                    error: !titleValid ? 'Expense Title is Missing' : '',
                },
                createdAt: {
                    value: inputValue.createdAt.value,
                    error: !dateValid ? 'Date is invalid' : '',
                },
            });
        }

        // for one this is best but we have to do something different to handle three of the inputs

        onsubmit(data);
    };

    return (
        <View>
            <View style={styles.formContainer}>
                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                    <View style={styles.flex}>
                        <ManageExpenseInput
                            name='amount'
                            title={'Amount:'}
                            ontextChange={inputValueHandler}
                            value={inputValue.amount.value}
                            placeholder='amount'
                            placeholderTextColor='#ccc'
                            keyboardType='numeric'
                            errorMeaasage={inputValue.amount.error}
                        />
                    </View>
                    <View style={styles.flex}>
                        <ManageExpenseInput
                            name='createdAt'
                            title={'Date:'}
                            ontextChange={inputValueHandler}
                            value={inputValue.createdAt.value}
                            placeholder='yyyy-mm-dd'
                            placeholderTextColor='#ccc'
                            keyboardType='numeric'
                            errorMeaasage={inputValue.createdAt.error}
                        />
                    </View>
                </View>

                <ManageExpenseInput
                    name='title'
                    title={'Title:'}
                    ontextChange={inputValueHandler}
                    value={inputValue.title.value}
                    placeholder='title of expense'
                    placeholderTextColor='#ccc'
                    errorMeaasage={inputValue.title.error}
                    style={{ minHeight: 100, textAlignVertical: 'top' }}
                    multiline={true}
                />
            </View>

            <View style={styles.actionButtonWraper}>
                <CustomButton
                    style={styles.button}
                    onpress={expenseSubmitHander}
                >
                    {!!id ? 'Update' : 'Add'}
                </CustomButton>
                <CustomButton
                    style={styles.button}
                    onpress={CancelExpenseHandler}
                >
                    Cancel
                </CustomButton>
            </View>
        </View>
    );
};

// how
export default ManageExpenseForm;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    formContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    button: {
        minWidth: 120,
        marginHorizontal: 5,
    },
    actionButtonWraper: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
