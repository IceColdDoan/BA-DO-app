import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useAuth, useOAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

enum Strategy {
  Google = "oauth_google",
  Facebook = "oauth_facebook",
  Instagram = "oauth_instagram",
}

const login = () => {

  const { startOAuthFlow: facebookAuth } = useOAuth({strategy: 'oauth_facebook'})
  const { startOAuthFlow: googleAuth } = useOAuth({strategy: 'oauth_google'})
  const { startOAuthFlow: instagramAuth} = useOAuth({strategy: 'oauth_instagram'})

  const onSelectAuth = async (strategy: Strategy) => {
    
  }

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
        <Text style={{alignSelf: "center", fontWeight: "bold", marginBottom: 15}}>OR</Text>
      </View>

      <View style={{gap: 10}  }>
        
        <Pressable style={styles.btnBox}>
          <Ionicons name="call-outline" style={styles.btnBoxIcon} size={15}/>
          <Text style={{fontWeight: "600"}}>
            Continue with Phone
          </Text>
        </Pressable>
        
        <Pressable style={styles.btnBox}>
          <Ionicons name="logo-facebook" style={styles.btnBoxIcon} size={15}/>
          <Text style={{fontWeight: "600"}}>
            Continue with Facebook
          </Text>
        </Pressable>

        <Pressable style={styles.btnBox}>
          <Ionicons name="logo-instagram" style={styles.btnBoxIcon} size={15}/>
          <Text style={{fontWeight: "600"}}>
            Continue with Instagram
          </Text>
        </Pressable>

        <Pressable style={styles.btnBox}>
          <Ionicons name="logo-google" style={styles.btnBoxIcon} size={18}/>
          <Text style={{fontWeight: "600"}}>
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
    justifyContent: "center",
    alignItems: "center",
  },

  btnBoxIcon: {
    position: "absolute",
    left: 16,

  }
  
})
export default login