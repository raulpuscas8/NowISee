import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../../infrastructure/theme/colors";
const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../assets/primapagina.jpg")}
      >
        <View style={style.details}>
          <Text
            style={{ color: COLORS.white, fontSize: 50, fontWeight: "bold" }}
          >
            NowIsee
          </Text>
          <Text
            style={{
              color: COLORS.white,
              lineHeight: 25,
              marginTop: 15,
              fontSize: 15,
            }}
          >
            Această aplicație este destinată oamenilor care nu pot să destindă
            culorile și totodată celor care vor să ajute printr-un video call
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
          >
            Dorești să ajuți sau să fii ajutat?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Creeaza un cont</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 140,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnBoardScreen;
