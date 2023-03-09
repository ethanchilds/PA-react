import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, TextInput } from 'react-native';
// Textbox for Text Input
const TextBox = ({value, setvalue,placeholder, HideText}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setvalue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={HideText}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 6,
    },
    input:{},

});
export default TextBox;