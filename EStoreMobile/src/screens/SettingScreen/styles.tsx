import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    holder: {
        width: '80%',
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        lineHeight: 24
    },
    btnSave: {
        width: '30%'
    }
});

export default style;