import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/GREEN TM.png')} style={{ width: '45%', height: '35%' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'lightblue',
        flex: 0.6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});