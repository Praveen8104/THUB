import { View, Text, Image, StyleSheet } from "react-native";
import Home from "./home";

export default function Main() {
    return (
        <View style={styles.main}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 8.8,
    },
});