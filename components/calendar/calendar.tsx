import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Colors from '@/constants/Colors';

const calendar = () => {
  const [taskDone, setTaskDone] = useState(0.1)
  
  const handleDayPress = () => {
    // Increase the opacity by 0.15, up to a maximum of 1
    if (taskDone < 0.85) {
      setTaskDone(taskDone + 0.15);
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <View>
      <CalendarList 
        onDayPress={handleDayPress}
        markingType='custom'
        markedDates={{
        [currentDate]: {
            customStyles: {
                  container: {
                    backgroundColor: `rgba(255, 201, 34, ${taskDone})`
                    }
                }
            }
        }
      }/>
    </View>
  )
}

export default calendar