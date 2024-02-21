import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '80%',
        padding: 10,
        display: 'flex',
        alignContent: 'center'
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 15
    },
    errorLabel: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        marginBottom: 15
    }
});

export default style;