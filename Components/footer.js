import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
export default function Footer() {
  return (
    <>
      <View style={styles.footerDiv}>
        <View style={styles.icon}><Foundation name="home" color="green" size={30} /><Text style={{color:"green"}}>Home</Text></View>
        <View style={styles.icon}><EvilIcons name="calendar" color="green" size={35} /><Text style={{color:"green"}}>Events</Text></View>
        <View style={styles.icon}><FontAwesome5 name="door-open" color="green" size={25} /><Text style={{color:"green"}}>Join</Text></View>
        <View style={styles.icon}><FontAwesome6 name="user" color="green" size={25} /><Text style={{color:"green"}}>Profile</Text></View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  footerDiv: {
    flex: 0.8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});