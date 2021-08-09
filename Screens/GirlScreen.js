import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header, Button, Input } from "react-native-elements";
import { sendPushNotification } from "../Services/api";

const GirlScreen = () => {
  const token = "ExponentPushToken[uFCouRNscBIV_jQZAdctvy]";

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

    input_container: {
      marginLeft: "30%",
      marginRight: "30%",
      marginBottom: "2%",
      marginTop: "3%",
      width: "40%",
    },
    input_field: {
      textAlign: "center",
    },
    button_apply_container: {
      marginTop: "1%",
      marginBottom: "2%",
      marginLeft: "30%",
      marginRight: "30%",
    },
    button_summon_container: {
      backgroundColor: "#DDDDDD",
      height: "65%",
      marginLeft: "5%",
      marginRight: "5%",
    },
    button_summon_row: {
      marginTop: "5%",
      marginLeft: "1%",
      marginBottom: "00%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    text_summon_button: {
      textAlign: "center",
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },
    button_summon_box: {
      height: "48%",
      width: "48%",
      backgroundColor: "#548058",
      alignSelf: "auto",
      marginHorizontal: "1%",
      justifyContent: "space-around",
    },
    button_summon: {
      alignItems: "center",
      padding: "3%",
      height: "100%",
    },
  });
  return (
    <View>
      <View>
        <Header
          backgroundColor="#2E3033"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "CrushApp", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View>
          <View style={styles.input_container}>
            <Input
              style={styles.input_field}
              placeholder="Code"
              onChangeText={(value) => this.setState({ comment: value })}
            />
          </View>
          <View style={styles.button_apply_container}>
            <Button buttonStyle={styles.button_apply} title="Bestätigen" />
          </View>
        </View>
        <View style={styles.button_summon_container}>
          <View style={styles.button_summon_row}>
            <Button
              titleStyle={styles.text_summon_button}
              type="clear"
              title="Em đói"
              onPress={() => sendPushNotification(token, "Mon", "Em đói")}
              containerStyle={styles.button_summon_box}
              buttonStyle={styles.button_summon}
            ></Button>
            <Button
              titleStyle={styles.text_summon_button}
              type="clear"
              title="Đi chợ không a?"
              onPress={() => sendPushNotification(token, "Mon", "Đi chợ không a?")}
              containerStyle={styles.button_summon_box}
              buttonStyle={styles.button_summon}
            ></Button>
            <Button
              titleStyle={styles.text_summon_button}
              type="clear"
              title="Bật máy tính nha"
              onPress={() =>
                sendPushNotification(token, "Mon", "Bật máy tính nha")
              }
              containerStyle={styles.button_summon_box}
              buttonStyle={styles.button_summon}
            ></Button>
          </View>
          <View style={styles.button_summon_row}>
            <Button
              titleStyle={styles.text_summon_button}
              backgroundColor="#343434"
              type="clear"
              title="Em thèm trà sữa"
              onPress={() =>
                sendPushNotification(token, "Mon", "Em thèm trà sữa")
              }
              containerStyle={styles.button_summon_box}
              buttonStyle={styles.button_summon}
            ></Button>
            <Button
              titleStyle={styles.text_summon_button}
              backgroundColor="#343434"
              type="clear"
              title="Em có hàng về"
              onPress={() =>
                sendPushNotification(token, "Mon", "Em có hàng về")
              }
              containerStyle={styles.button_summon_box}
              buttonStyle={styles.button_summon}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default GirlScreen;
