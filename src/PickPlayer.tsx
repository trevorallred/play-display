import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  setPlayer: (player: string) => void;
};
const players = ["L", "C", "T", "R", "B"];
type PlayerColor = "blue" | "orange" | "red" | "purple" | "green";
export const colors: Record<string, PlayerColor> = {
  L: "blue",
  C: "orange",
  B: "red",
  T: "purple",
  R: "green",
};

export default function PickPlayer({ setPlayer }: Props) {
  return (
    <View style={{ backgroundColor: "#333333", flex: 1 }}>
      <Text
        style={{
          fontSize: 45,
          padding: 20,
          textAlign: "center",
          color: "white",
        }}
      >
        Pick Primary Target
      </Text>
      <View>
        {players.map((player) => {
          return (
            <Pressable
              style={{
                flex: 1,
                margin: 20,
                backgroundColor: "white",
                borderRadius: 50,
              }}
              onPress={() => setPlayer(player)}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  color: colors[player] || "black",
                  bottom: 5,
                  left: 5,
                  textAlign: "center",
                }}
              >
                {player}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
