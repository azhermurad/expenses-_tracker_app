import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyNavigation from './navigation/Navigation';
import ExpenseProvider from './store/context/store';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <ExpenseProvider>
                <MyNavigation />
            </ExpenseProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
