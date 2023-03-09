import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function CreateAccount(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account Screen</Text>
      {/* <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Setting')}>
        <Text style={styles.buttonText}>Go to Setting Screen</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default CreateAccount