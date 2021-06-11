import axios from "axios";
import { AsyncStorage } from "react-native";

const EXPO_URL = "https://exp.host/--/api/v2/push/send";

export const sendPushNotification = async (token, title, body) => {
  const message = {
    to: token,
    sound: "default",
    title,
    body,
  };
  await axios.post(EXPO_URL, message);
  alert("Trieu hoi thanh cong");
};
