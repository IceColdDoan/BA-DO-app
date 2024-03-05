import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const possibleTasks = [
  "take a cold shower",
  "go on a 15 min jog",
  "crank out 20 push ups",
  "learn a fun fact",
  "meditate for 20 mins",
  "read a book for 20 mins",
]

const switchIndex = (myArray: string[], index: number): string[] => {
  let temp = myArray[myArray.length - 1]
  myArray[myArray.length - 1] = myArray[index]
  myArray[index] = temp

  return myArray;
}

const generateAllTasks = () => {
  const cpyTasks = [...possibleTasks]
  const tasks = []

  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * cpyTasks.length)
    let task = cpyTasks[index] 
    tasks.push(<View style={{flexDirection: "row",}}>
                  <Pressable>
                    <Ionicons name="square-outline"/>
                  </Pressable>
                  <Text style={styles.texts} key={i}>{task}</Text>
              </View>)  
    switchIndex(cpyTasks, index)
    cpyTasks.pop()
  }

  return tasks;
}   

const tasks = () => {
  const generatedTasks = generateAllTasks()
  return (
    <View style={{gap: 100, alignItems: "center"}}>
      {generatedTasks}
    </View>
  )
}

const styles = StyleSheet.create({
  texts: {
    marginLeft: 10,
    fontFamily: 'Press2P',
    fontSize: 15,
    color: Colors.primary,
  },

  btn: {
    
  }
})

export default tasks