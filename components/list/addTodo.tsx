import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import Todo from "@/components/list/todo"

const addTodo = () => {
  const [numTask, setNumTask] = useState(0); 
  const [clicked, setClick] = useState(false)

  return (
    <View style={styles.container}>
      {[...Array(numTask)].map((_, i) => <Todo key={i}/>)}
      <Pressable onPress={() => {
        setNumTask(numTask + 1); 
        setClick(true);
        setTimeout(() => {
          setClick(false);
        }, 100);
      }}
      
        style={styles.mainBtn}>
        <MaterialCommunityIcons style={{fontSize: 20}} name={clicked ? "checkbox-blank-circle" : 'checkbox-blank-circle-outline'}/>
        <Text style={styles.text}>
            Add A Todo Task!
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },

    mainBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        justifyContent: "center"
    },

    text: {
        fontFamily: "Press2P",
        paddingLeft: 10,
        color: Colors.primary,
        
    },

})
export default addTodo