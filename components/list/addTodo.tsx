import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import Todo from "@/components/list/todo"

const addTodo = () => {
  const [visible, setVisible] = useState(true); 

  return (
    <View style={styles.container}>
      {visible ? null : <Todo/>}
      <Pressable onPress={() => setVisible(!visible)} style={styles.mainBtn}>   
        <MaterialCommunityIcons style={visible ? {fontSize: 20}: {display: 'none'}} name='circle-outline'/>
        <Text style={visible ? styles.text: {display: 'none'}}>
            Add A Todo Task!
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 10,
    },

    mainBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
    },

    text: {
        fontFamily: "Press2P",
        paddingLeft: 10,
        color: Colors.primary,
    },

})
export default addTodo