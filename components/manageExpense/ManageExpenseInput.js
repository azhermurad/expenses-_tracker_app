import { StyleSheet, TextInput, View, Text } from 'react-native';

const ManageExpenseInput = ({
    name,
    title,
    ontextChange,
    style,
    errorMeaasage,
    ...props
}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputTextTitle}>{title}</Text>
            <View style={{}}>
                <TextInput
                    style={[styles.input, style]}
                    onChangeText={ontextChange.bind(this, name)}
                    {...props}
                />
                {errorMeaasage && (
                    <Text style={styles.error}>{errorMeaasage}</Text>
                )}
            </View>
        </View>
    );
};

export default ManageExpenseInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
    },
    input: {
        borderColor: 'white',
        // backgroundColor:"green",
        borderWidth: 2,
        color: 'white',
        fontSize: 16,
        padding: 10,
        borderRadius: 10,
    },
    inputTextTitle: {
        color: 'white',
        fontSize: 14,
        paddingVertical: 5,
    },
    error: {
        color: 'red',
        fontSize: 15,
        marginTop: 5,
    },
});
