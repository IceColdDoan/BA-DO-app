import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const login = () => {

  return (
    <View style={ styles.container }>
      <View>
        <TextInput placeholder='Email' autoCapitalize='none' style={styles.input}/>
      </View>

      <View>
        <TextInput placeholder='Password' autoCapitalize='none' style={styles.input}/>
      </View>

      <View>
        <Pressable style={styles.btn}>
          <Text style={{fontFamily: "Press2P", fontSize: 10, color: "white",}}>
            Continue</Text>
        </Pressable>
      </View>
      
      <View>
        <Text style={{alignSelf: "center", fontWeight: "bold"}}>OR</Text>
      </View>

      <View>
        
        <Pressable style={styles.btnBox}>
          <Ionicons name="call-outline" style={styles.btnBoxIcon}/>
          <Text style={{alignSelf: "center"}}>
            Continue with Phone
          </Text>
        </Pressable>
        
        <Pressable style={styles.btnBox}>
          <Text>
            Continue with Facebook
          </Text>
        </Pressable>

        <Pressable style={styles.btnBox}>
          <Text>
            Continue with Instagram
          </Text>
        </Pressable>

        <Pressable style={styles.btnBox}>
          <Text>
            Continue with Gmail
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.grey,
    padding: 10,
    marginBottom: 30,

  },
  
  btn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.dark,
    backgroundColor: Colors.primary,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  
  btnBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderBlockColor: Colors.dark,
    padding: 10,
    marginBottom: 10,
  },

  btnBoxIcon: {
    alignSelf: "center"
  }
  
})
export default login