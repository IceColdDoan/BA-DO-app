import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  return (
    <ScrollView style={{padding: 10}}> 
        <View style={styles.container}>
            <Text style={styles.username}>
                @Benji_chicken
            </Text>
            <View style={styles.seperator}/>
            <Text style={styles.post}>
              Tough Work today but we push through loving the grind!
            </Text>
            <View style={styles.bottomBtn}>
              <Pressable onPress={() => setLikes(likes + 1)} style={styles.bigBtn}>
                <MaterialCommunityIcons name="thumb-up" style={styles.btn}/>
                <Text style={styles.btn}>{likes}</Text>
              </Pressable>
              <Pressable onPress={() => setComments(comments + 1)} style={styles.bigBtn}>
                <MaterialCommunityIcons name="comment" style={styles.btn}/>
                <Text style={styles.btn}>{comments}</Text>
              </Pressable>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 10,
        height: 200
    },

    username: {
        fontFamily: "Press2P",

    },

    seperator: {
      width: "100%",
      height: 2,
      flexDirection: "row",
      alignSelf: "stretch",
      backgroundColor: Colors.dark,
    },

    post: {
      flexWrap: "wrap",
      fontSize: 30,
    },

    bottomBtn: {
      flexDirection: "row",
      justifyContent: "space-evenly"
      
    },

    btn: {
      fontSize: 20
    },

    bigBtn: {
      borderColor: Colors.grey,
      borderWidth: 2,
      borderRadius: 10,
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
    }
})
export default post