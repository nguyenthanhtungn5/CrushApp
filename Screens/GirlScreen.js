
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import {Header,Button,Input} from 'react-native-elements';
const GirlScreen = ()=> {
    return (
      <View >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'CrushApp', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        <View style={styles.page}>
          <Input label="Code" placeholder="fragen Sie ihren Freund"/>
          <TouchableOpacity style={styles.button}>
            <Text>bestätigen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSummon}>
            <Text>Tra Sua</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.buttonSummon}>
            <Text>Tra Sua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSummon}>
            <Text>Tra Sua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSummon}>
            <Text>Tra Sua</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    page: {
      padding: "40 30 0 30",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    buttonSummon: {
      backgroundColor: "#DDDDDD",
      flex: 1,
    },
  });
export default GirlScreen;