import * as Animatable from "react-native-animatable";
import * as C from "./styles";
import { View, Text, Image } from "react-native";
import { TextInput, Checkbox, Snackbar } from "react-native-paper";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import Button from "../Button";
import AfterButtonText from "../AfterButtonText";

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [response, setResponse] = useState({});
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://192.168.1.37:3000/login", data);
      setResponse(response.data);

      if (response.data) {
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <Animatable.View
      animation="fadeInUpBig"
      style={{
        position: "absolute",
        left: 0,
        top: 100,
        bottom: 0,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <C.FormContainer>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#ADADAD"
          placeholder="Enter your email"
          activeUnderlineColor="#F9A826"
          outlineColor="#F9A826"
          keyboardType="email-address"
          mode="flat"
          style={{ backgroundColor: "transparent" }}
        />
        <Text style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>
          Password
        </Text>
        <TextInput
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye-off" : "eye"}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#ADADAD"
          activeUnderlineColor="#F9A826"
          secureTextEntry={showPassword ? false : true}
          outlineColor="#F9A826"
          placeholder="Enter your password"
          mode="flat"
          style={{ backgroundColor: "transparent" }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              onPress={() => setIsChecked(!isChecked)}
              status={isChecked ? "checked" : "unchecked"}
              color="#F9A826"
              uncheckedColor="#ADADAD"
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#707070",
              }}
            >
              Stay logged in?
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 400, color: "#707070" }}>
              Forgot Password?
            </Text>
          </View>
        </View>
      </C.FormContainer>
      <Button
        mode={"contained"}
        onPress={() => handleLogin()}
        title={"Login"}
      />
      {error && (
        <Snackbar
          visible={error ? true : false}
          onDismiss={() => setError("")}
          duration={2000}
          style={{ backgroundColor: "#f00" }}
        >
          {error}
        </Snackbar>
      )}

      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 15,
        }}
      >
        Don’t have an account yet?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: "#F9A826" }}
        >
          Sign up
        </Text>
      </Text>
      <AfterButtonText />
      <View
        style={{
          marginTop: 20,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            gap: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "#eee",
            }}
          >
            <Image source={require("../../../assets/email.png")} alt="email" />
          </View>
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "#eee",
            }}
          >
            <Image
              source={require("../../../assets/facebook.png")}
              alt="facebook"
            />
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};
