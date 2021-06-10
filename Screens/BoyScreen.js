import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header, Button, Input } from "react-native-elements";

import * as Notifications from "expo-notifications";
async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("failed to get Token");
      return;
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;
  console.log({ token });
  return token;
}
const BoyScreen = () => {
  const styles = StyleSheet.create({
    button_apply: {
      alignItems: "center",
      backgroundColor: "#A5282C",
      padding: "3%",
      height: 50,
    },
    text_apply: {
      color: "#F3F3F3",
    },
    button_apply_container: {
      marginTop: "1%",
      marginBottom: "2%",
      marginLeft: "30%",
      marginRight: "30%",
    },
  });
  return (
    <View>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <View style={styles.button_apply_container}>
        <Button
          onPress={getNotificationToken}
          buttonStyle={styles.button_apply}
          title="Code senden"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
export default BoyScreen;
