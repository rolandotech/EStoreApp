import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    scroll: {
        padding: 10
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        paddingVertical: 10
    }
});

export default style;