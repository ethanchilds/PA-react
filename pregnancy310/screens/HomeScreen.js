import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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

export default Home