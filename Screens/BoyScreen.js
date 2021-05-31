
import React from 'react';
import {Header,Input} from 'react-native-elements';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BoyScreen = ()=> {
    return (
      <View >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View >
                <Input label="Code" placeholder="fragen Sie ihre Freundin"/>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text>bestätigen</Text>
                </TouchableOpacity>
            </View>      
       </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
  });
export default BoyScreen;