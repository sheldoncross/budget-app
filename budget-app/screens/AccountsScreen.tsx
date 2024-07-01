import { Text } from "@rneui/base";
import { View, StyleSheet } from "react-native";


export default function() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accounts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});