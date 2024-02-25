import React from 'react'
import { Tabs } from "expo-router"
import Colors from "@/constants/Colors"

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: "Press2P",
            fontSize: 7,
        }
    }}>
        <Tabs.Screen
            name="calendar"
            options={{
                tabBarLabel: "Calendar"
            }}
        />
    </Tabs>
  )
}

export default Layout