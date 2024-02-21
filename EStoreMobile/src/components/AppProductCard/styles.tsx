import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        paddingRight: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        gap: 10
    },
    image:{
        flex: 1,
        height: 60,
        width: '20%'
    },
    content: {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        fontFamily: 'Inter'
    },
    description: {
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 20,
        fontFamily: 'Inter'
    },
    price:{
        flex: 1,
        maxWidth: '20%',
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 20,
        fontFamily: 'Inter'
    }
});

export default style;