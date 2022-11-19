import * as React from "react";
import { View, Text } from "react-native";

export default function TimesheetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onProgress={() => navigation.navigation('Home')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Timesheet Screen
      </Text>
    </View>
  );
}