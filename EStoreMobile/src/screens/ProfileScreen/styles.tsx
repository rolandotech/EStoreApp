import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
    content: {
        display: 'flex',
        gap: 10
    },
    name:{
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        textAlign: 'center'
    },
    holder: {
        display: 'flex',
        flexDirection: 'row'
    },
    text1: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'normal'
    }
});

export default style;