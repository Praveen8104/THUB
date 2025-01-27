import { View, Text, Image, StyleSheet, FlatList, Dimensions, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const data = [
    { id: 1, name: "Programs", icon: "microsoft-visual-studio-code", tag: "MaterialCommunityIcons" },
    { id: 2, name: "Courses", icon: "graduation-cap", tag: "FontAwesome6" },
    { id: 3, name: "Certifications", icon: "certificate", tag: "MaterialCommunityIcons" },
    { id: 4, name: "OwlCoder", icon: "owl", tag: "MaterialCommunityIcons" },
    { id: 5, name: "Placements", icon: "chess-pawn", tag: "FontAwesome6" },
    { id: 6, name: "Team", icon: "people-group", tag: "FontAwesome6" },
    { id: 7, name: "Partners", icon: "handshake", tag: "FontAwesome6" },
    { id: 8, name: "Registration", icon: "app-registration", tag: "MaterialIcons" },
];

export default function Home() {
    const { width, height } = Dimensions.get('screen')
    const Info = ['Virat Kohli', 'Hitman', 'Bumrah', 'Siraj', 'Rahul', 'Pant', 'Dhoni', 'Jadeja', 'Shami']
    return (
        <View style={styles.home}>

            <View style={styles.greeting}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'green' }}>Welcome, PRAVEEN REDDY</Text>
            </View>

            <View style={styles.banner1}>
                <Image source={require('../assets/banner1.jpg')} style={{ width: '100%', height: '100%' }} />
            </View>

            <View style={styles.greeting}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'green' }}>Categories</Text>
            </View>

            <View style={styles.categories}>
                {data.map((item) => (
                    <View style={styles.categories_icon}>
                        <View key={item.id}>
                            {item.tag === "MaterialCommunityIcons" ? (
                                <MaterialCommunityIcons name={item.icon} color="black" size={25} />
                            ) : item.tag === "FontAwesome6" ? (
                                <FontAwesome6 name={item.icon} color="black" size={25} />
                            ) : (
                                <MaterialIcons name={item.icon} color="black" size={25} />
                            )}
                        </View>
                        <Text style={{ fontSize: 10, fontWeight: '600', color: 'green' }}>{item.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.greeting}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'green' }}>Digi Wall</Text>
            </View>

            <View style={styles.carouselContainer}>
                <FlatList
                    data={Info}
                    renderItem={({ item }) => (
                        <View style={{ height: 200, width: width,justifyContent: 'end', alignItems: 'center'}}>
                            <View style={
                                {
                                    width: "93%",
                                    height: "90%",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    backgroundColor: 'green',
                                    borderRadius: 15,
                                }}>
                                <Text style={{ color: "white", fontSize: 55 }}>{item}</Text>
                            </View>
                        </View>
                    )}
                    horizontal
                    pagingEnabled
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 8.8,
        padding: 13,
    },

    greeting: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
    },

    banner1: {
        backgroundColor: 'green',
        width: '100%',
        height: '25%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 2,
    },

    categories: {
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },

    categories_icon: {
        width: '20%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        borderStartColor: 'green',
        borderEndColor: 'gold',
        borderTopColor: 'green',
        borderBottomColor: 'gold',
    },

    carouselContainer: {
        marginTop: 10,
        marginHorizontal: -13,
    }
});