import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions,Pressable} from 'react-native';
import Logo from 'Logo.jpeg';
import TextBox from 'Logo.jpeg';
import Button from '/Users/kemish/Documents/GIT/Intake/src/Button';

const SignInScreen = () => {
  // Constants to set the Username and Password
  const [Username, setusername]=useState();
  const [Password, setPassword]=useState();
  const {height}= useWindowDimensions();
  // Function that'll diplay 'Signed In'
  const SignedIn = () => {
    console.warn('Signed In');
  }
  // Put together the sign in screen
  return (
    <View style={styles.root}>
        {/* Display Logo */}
        <Image
          style={[styles.logo,{height: height*0.3}
          ]}
          source={Logo}
        />
        <TextBox placeholder="Username" value={Username} setvalue={setusername} />
        <TextBox placeholder="Password" value={Password} setvalue={setPassword} HideText={true} />
        
        <Button 
        Pressed={SignedIn} 
        text='Sign In'
        
        />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxheight: 100,
    resizeMode: 'contain'
  },
  root: {
    alignItems: 'center',
    padding: 20
  },
});

export default SignInScreen;