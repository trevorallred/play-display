import React from "react";
import { Image, Pressable, Text, View } from "react-native";
const img = require("../assets/plays/play1.png");

type Props = {
  setPlay: (play: number) => void;
};
export default function PickPlay({ setPlay }: Props) {
  const plays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

  return (
    <View style={{ backgroundColor: "#333333" }}>
      <Text
        style={{
          fontSize: 45,
          padding: 20,
          textAlign: "center",
          color: "white",
        }}
      >
        Pick a Play
      </Text>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {plays.map((play) => {
          // const img = require("../assets/plays/play" + play + ".png");
          const playImage = "../assets/plays/play" + play + ".png";
          return (
            <View style={{ width: "50%", height: "50vw", padding: 10 }}>
              <Text
                style={{
                  zIndex: 100,
                  position: "absolute",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "black",
                  bottom: 5,
                  left: 5,
                }}
              >
                {play}
              </Text>
              <Pressable style={{ flex: 1 }} onPress={() => setPlay(play)}>
                <Image
                  style={{ width: "100%", height: "100%", aspectRatio: 1 }}
                  resizeMode="contain"
                  source={require(playImage)}
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}
