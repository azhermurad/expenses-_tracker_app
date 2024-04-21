import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import { Text } from 'react-native';
import { GlobalColors } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import PressableIcon from '../components/UI/PressableIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({navigation})=>({
                headerStyle: {
                    backgroundColor: GlobalColors.primary500,
                },

                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: GlobalColors.primary500,
                    height: 70,
                    margin: 5,
                    borderRadius: 20,
                    position: 'absolute',
                    // padding:2
                },
                tabBarItemStyle: {
                    padding: 10,
                },

                tabBarIconStyle: {
                    // backgroundColor:"red",
                    color: 'green',
                    fontSize: 100,
                },
                tabBarLabelStyle: {
                    // backgroundColor:"green",
                    fontSize: 15,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: GlobalColors.accent500,
                headerRightContainerStyle:{
                    // marginHorizontal:/
                    paddingRight:20
                },
                headerRight: (a) => {
                    return <PressableIcon name={"add"} color={a.tintColor} pressable={()=>{
                        navigation.navigate("ExpenseManage")
                    }}/>
                },
            })}
        >
            <Tab.Screen
                name='AllExpenses'
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='home' size={size} color={color} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='RecentExpenses'
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name='calendar'
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
