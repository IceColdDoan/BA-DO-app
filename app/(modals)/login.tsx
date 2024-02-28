import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import Colors from '@/constants/Colors';

const login = () => {
  useWarmUpBrowser();

  return (
    <View style={ styles.container }>
      <TextInput placeholder='Email' autoCapitalize='none' style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f28e0c",
    padding: 20,
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.grey,
    padding: 10,
    
  }
})
export default login