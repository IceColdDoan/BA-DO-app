import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const possibleTasks = [
  "Take a cold shower",
  "Go on a 15 min jog",
  "Crank out 20 push ups",
  "Learn a fun fact",
  "Meditate for 20 mins",
  "Read a book for 20 mins",
];

const Tasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [checkedTasks, setCheckedTasks] = useState(Array(possibleTasks.length).fill(false));

  const toggleChecked = (index: number) => {
    setCheckedTasks(prevCheckedTasks => {
      const newCheckedTasks = [...prevCheckedTasks];
      newCheckedTasks[index] = !newCheckedTasks[index];
      return newCheckedTasks;
    });
  };

  useEffect(() => {
    const cpyTasks = [...possibleTasks];
    const newTasks: string[] = [];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * cpyTasks.length);
      let task = cpyTasks[index];
      newTasks.push(task);
      cpyTasks.splice(index, 1);
    }
    setTasks(newTasks);
  }, []);

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleChecked(index)}>
          <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center", maxWidth: 200 }}>
            {checkedTasks[index] ? <MaterialCommunityIcons name="square" size={20} /> : <MaterialCommunityIcons name='square-outline' size={20} />}
            <Text style={checkedTasks[index] ? styles.textsChecked : styles.texts}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  texts: {
    marginLeft: 10,
    fontFamily: 'Press2P',
    fontSize: 15,
    color: Colors.primary,
    alignSelf: "flex-start"
  },
  textsChecked: {
    marginLeft: 10,
    fontFamily: 'Press2P',
    fontSize: 15,
    color: Colors.primary,
    textDecorationLine: "line-through",
    alignSelf: "flex-start"
  },
});

export default Tasks;
