import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = {
  play: number;
  player: string;
  reset: () => void;
};
export default function DisplayPlay({ play, player, reset }: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        borderColor: "red",
        borderWidth: 10,
      }}
    >
      <Text style={styles.text}>{play}</Text>
      <Text style={[styles.text]}>{player}</Text>
      <Button onPress={reset} color="black" title="Reset Play" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 300,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
});
