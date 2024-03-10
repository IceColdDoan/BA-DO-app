import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack, router, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityHeader from "@/components/activity/activityHeader"

const activity = () => {
  const { isSignedIn, signOut } = useAuth();
  
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => [<ActivityHeader key={0}/>,
        <Pressable key={1} onPress={() => router.navigate("(modals)/login")}>
          <MaterialCommunityIcons name="face-man-profile" style={styles.btn}/>
        </Pressable>
        ]
      }}
      />
      <Pressable onPress={() => signOut}> 
        <Text style={{textAlign: "center"}}>
          Sign Out  
        </Text> 
      </Pressable>
      <Link href="/(activities)/chicken"> My activities </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "flex-end",
    fontSize: 20
  }
})
export default activity;