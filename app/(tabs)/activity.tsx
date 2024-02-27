import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const community = () => {

  return (
    <View>
      <Text></Text>
      <Link href={"/(modals)/login"} asChild> 
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={20}></Ionicons>
        </TouchableOpacity>
      </Link>
      <Link href="/(activities)/chicken"> My activities </Link>
    </View>
  )
}

export default community;