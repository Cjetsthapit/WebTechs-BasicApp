import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch
} from "react-native";

export default function HelloWorldApp() {
  const [value, setValue] = React.useState("");
  const [backgroundColor,  setBackgroundColor] = useState("#eee");
  const [textColor,  setTextColor] = useState("#111");
  const [isEnabled, setIsEnabled] = useState(false);
  // Task 1 and Task 2
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setBackgroundColor((prevColor) => (prevColor === '#eee' ? '#111' : '#eee'));
    setTextColor((prevColor) => (prevColor === '#eee' ? '#111' : '#eee'));
  };
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <TextInput
        style={{...styles.edit,  color: textColor, borderColor: textColor}}
        onChangeText={(text) => setValue(text)}
        clearTextOnFocus="true"
        value={value}
        placeholder="Enter anything"
        placeholderTextColor={textColor}
      />
      <TouchableOpacity
        style={{...styles.button}}
        onPress={() => setValue("")}
      >
        <Text>Clear</Text>
      </TouchableOpacity>
      <Text style={{...styles.title, color:textColor}}>{value}</Text>

      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  edit: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    height: 50
  },
  button: {
    width:'60%',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
