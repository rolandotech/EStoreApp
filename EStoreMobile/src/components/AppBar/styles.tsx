import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        flex: 1,
        maxWidth: 40
    },
    search: {
        flex: 5,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        borderWidth: 1,
    }
});

export default style;