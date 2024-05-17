import { createContext, useReducer, useState } from 'react';
import DATA from '../../dummy_data/data';

export const ExpenseContext = createContext({
    expenses: [],
    expenseHandler: ({ amount, title, createdAt, id }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { amount, title, createdAt }) => {},
    setExpense: (expene) => {},
});

function reducer(state, { payload, type }) {
    switch (type) {
        case 'SET_EXPENSE': {
            return payload;
        }
        case 'ADD': {
            const data = { ...payload };
            return [data, ...state];
        }
        case 'UPDATE': {
            const data = [...state].map((expense) => {
                if (expense.id == payload.id) {
                    return { ...expense, ...payload.expense };
                }
                return expense;
            });
            return data;
        }
        case 'DELETE': {
            const data = [...state].filter(
                (expense) => expense.id !== payload.id
            );
            return data;
        }
        default:
            return state;
    }
}

const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    function expenseHandler(expense) {
        dispatch({ type: 'ADD', payload: expense });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: { id } });
    }
    function updateExpense(id, expense) {
        dispatch({ type: 'UPDATE', payload: { id: id, expense: expense } });
    }
    function setExpense(expense) {
        dispatch({ type: 'SET_EXPENSE', payload: expense });
    }

    return (
        <ExpenseContext.Provider
            value={{
                expenses: state,
                expenseHandler,
                deleteExpense,
                updateExpense,
                setExpense,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseProvider;
