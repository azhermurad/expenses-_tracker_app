import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FlatList, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderItem = (props) => {
    return (
      <ExpenseItem {...props}/>
    );
};

const ExpenseList = ({ expenses }) => {
    const BarHeight = useBottomTabBarHeight();
    return (
        <View
            style={{
                flex: 1,
                paddingBottom: BarHeight + 10,
            }}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, a) => item.id}
                data={expenses}
                renderItem={renderItem}
            />
        </View>
    );
};
export default ExpenseList;

