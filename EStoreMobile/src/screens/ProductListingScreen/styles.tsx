import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cccccc',
        padding: 10,
        gap: 20,
        position: 'relative'
    },
    content: {
        display: 'flex',
        gap: 10
    },
    pagination: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: 10
    },
    pageGroup: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: 5
    },
    pages: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#ffffff'
    },
    pagesBtn: {},
    loader: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

export default style;