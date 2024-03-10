import { View, Text, TextInput, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const todo = () => {


  return (
      <View style={styles.container}>
          <View style={styles.card}>
            <View>
              <TextInput multiline={true} textAlignVertical="top" placeholder={'Input a task here!'}/>  
            </View>
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
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowOffset: {
      width: -2, 
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,  
    elevation: 10,
  }
})

export default todo;