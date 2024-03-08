import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const todo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput placeholder='Input a task here!' />  
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },

  card: {
    height: 170,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    width: 170,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,  
  }
})
export default todo