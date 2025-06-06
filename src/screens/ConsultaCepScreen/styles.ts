import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 28,
    },
    styleInput: {
        height: 70,
        width: '100%',
        borderWidth: 1,
        marginVertical: 16,
        borderRadius: 8,
    },
    styleButton: {
        width: "100%",
        height: 70,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    textHeader: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: 'black',
        gap:25
    }
})