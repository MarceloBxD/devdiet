import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" style="light" />
        <SafeAreaView style={{ backgroundColor: "#F9A826", flex: 1 }}>
          <View
            style={{
              position: "absolute",
              width: 250,
              borderRadius: 125,
              height: 250,
              left: 184,
              top: -71,
              backgroundColor: "#FFB133",
            }}
          ></View>
          <Text
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#fff",
              position: "absolute",
              left: 26,
              top: 112,
            }}
          >
            Login
          </Text>
          <View
            style={{
              position: "absolute",
              left: 0,
              top: 259,
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: "#fff",
              padding: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                right={<TextInput.Icon icon="eye" />}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="#ADADAD"
                activeUnderlineColor="#F9A826"
                secureTextEntry={true}
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
                  <Checkbox />
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
                  <Text
                    style={{ fontSize: 15, fontWeight: 400, color: "#707070" }}
                  >
                    Forgot Password?
                  </Text>
                </View>
              </View>
            </View>
            <Button
              buttonColor="#F9A826"
              style={{ borderRadius: 50, marginTop: 20, padding: 5 }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Login</Text>
            </Button>
            <Text style={{ marginTop: 20, textAlign: "center", fontSize: 15 }}>
              Don’t have an account yet? Register here
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#ADADAD",
                  height: 1,
                  width: 110,
                }}
              ></View>
              <Text style={{ color: "#707070" }}>Or login with</Text>
              <View
                style={{
                  backgroundColor: "#ADADAD",
                  height: 1,
                  width: 110,
                }}
              ></View>
            </View>
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
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Image source={require("./assets/email.png")} alt="email" />
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    source={require("./assets/facebook.png")}
                    alt="facebook"
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}
