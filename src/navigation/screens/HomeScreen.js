import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import videocall from "../../../assets/videocall.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";

const Tab = createBottomTabNavigator();
export function HomeScreen() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={HomeScreen1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "blue" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Search"}
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "orange" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name={"ActionButton"}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: "orange",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "ios" ? 50 : 30,
                  }}
                >
                  <Image
                    source={videocall}
                    style={{
                      width: 50,
                      height: 30,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Notifications"}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? "blue" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Settings"}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "orange" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "blue",
          position: "absolute",
          bottom: 98,
          left: 40,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80;
  return width / 5;
}

function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
