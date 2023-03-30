import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';

const Button = ({Pressed, text}) => {
  return (
    <Pressable onPress={Pressed} style={styles.container}>
        <Text 
        style={styles.button}>
        {text}
        </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15bf95',
    width: '100%',
    padding: 15,
    alignItems: "center",
    marginVertical: 6
  },
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Button;
