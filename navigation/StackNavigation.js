import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import  ManageExpense from '../screens/ManageExpense'
import BottomTabNavigation from './BottomTabNavigaion';
import { GlobalColors } from '../constants/colors';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor:"white",
            headerStyle:{
                backgroundColor: GlobalColors.primary500,
            }
        }}>
            <Stack.Screen

                name='ExpensesOverview'
                component={BottomTabNavigation}
                options={{
                  headerShown:false,
                  
                }}
            />
            <Stack.Screen
                name='ExpenseManage'
                component={ManageExpense}
                options={{
                   
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;



