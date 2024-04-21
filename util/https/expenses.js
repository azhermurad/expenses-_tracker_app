import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://expense-backend-34fb3-default-rtdb.firebaseio.com/',
//     // timeout: 5000, // Timeout in milliseconds (optional)
//     // headers: {
//     //   'Content-Type': 'application/json',
//     //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example authorization header (optional)
//     // },
// });

export const CreateExpense = () => {
    axios
        .post(
            'https://expense-backend-34fb3-default-rtdb.firebaseio.com/expense.json',
            { name: 'aaa' }
        )
        .then((a) => {
            console.log(a);
        });

    return 'a';
};
