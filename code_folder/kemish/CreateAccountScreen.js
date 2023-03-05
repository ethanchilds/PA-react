import React, {useState} from 'react';
import {View, Image, Text, StyleSheet,Pressable} from 'react-native';
import Logo from '/Users/kemish/Documents/GIT/Intake/pregnancy/Images/Logo.jpeg';
import TextBox from '/Users/kemish/Documents/GIT/Pregnancy/src/TextBox';
import Button from '/Users/kemish/Documents/GIT/Pregnancy/src/Button';
/Users/kemish/Documents/GIT/PA-react/code_folder/kemish/CreateAccountScreen.js

const CreateAccount = () => {
  // Constants to set the Username and Password
  const [Username, setusername]=useState();
  const [Password, setPassword]=useState();
  const [ConfirmPassword, setConfirmPassword]=useState(); 
  // Function that'll diplay 'Signed In'
  const SignedIn = () => {
    console.warn('Account created');
  }
  // Put together the sign in screen
  return (
    <View style={styles.root}>
        <Text style={styles.Text}>
            Create Account
        </Text>
        <TextBox placeholder="Username" value={Username} setvalue={setusername} />
        <TextBox placeholder="Password" value={Password} setvalue={setPassword} HideText={true} />
        <TextBox placeholder="Confirm Password" value={ConfirmPassword} setvalue={setConfirmPassword} HideText={true} />
        <Button
        Pressed={SignedIn} 
        text = 'Sign Up'
        />
    </View>
  );
};
const styles = StyleSheet.create({
  Text: {
    fontSize: 24,
    padding:20,
    width: '70%',
    maxheight: 100,
    fontWeight: 'bold',
    resizeMode: 'contain',
    margin: 20,
  },
  root: {
    alignItems: 'center',
    padding: 20
  },
});

export default CreateAccount;