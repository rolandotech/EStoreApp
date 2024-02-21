import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5
    },
    image: {
        height: 120,
        width: '100%',
        borderRadius: 5
    },
    categTitle: {
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center'
    }
});

export default style;