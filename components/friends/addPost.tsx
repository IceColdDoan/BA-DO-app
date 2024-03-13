import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import Colors from '@/constants/Colors';
import Post from "@/components/friends/post"

const addPost = () => {
  const [numTask, setNumTask] = useState(0); 
  const [clicked, setClick] = useState(false)

  return (
    <ScrollView style={styles.container}>
    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
      {[...Array(numTask)].map((_, i) => <Post key={i}/>)}
    </View>
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
            Add A Post!
        </Text>
      </Pressable>
      </ScrollView>

  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },

    mainBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,

    },

    text: {
        fontFamily: "Press2P",
        paddingLeft: 10,
        color: Colors.primary,
        
    },

})

export default addPost