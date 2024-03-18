import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { FontAwesome,MaterialCommunityIcons } from 'react-native-vector-icons';
const App = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, inputText]);
      setInputText('');
    }
  };
  const handleEditTask = (index, newTask) => {
    // Update the task at the given index with the new value
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };
  const handleDelTask = (index) => {
    // Create a copy of the tasks array, excluding the task at the given index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    // Update the state with the modified tasks list
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#333' }}>Todo List</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ height: 40, width: 150, borderWidth: 0.5, padding: 10, borderRadius: 5, backgroundColor: '#fff' }}
          placeholder="Enter task"
          value={inputText}
          onChangeText={setInputText}
        />
        <FontAwesome name="plus" size={30} color="green"  onPress={handleAddTask} />
      </View>
      {tasks.length > 0 && (
        <View style={{ marginTop: 20 }}>
          {tasks.map((task, index) => (
            <View key={index} style={{ flexDirection: 'row', backgroundColor: '#eee', padding: 10, borderRadius: 5 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>{task}</Text>
              <TextInput
                style={{ width: 170, borderWidth: 0.5, padding: 5, borderRadius: 5, backgroundColor: '#fff' }}
                defaultValue={task}
                onChangeText={(newTask) => handleEditTask(index, newTask)}
              />
              <MaterialCommunityIcons name="trash-can" size={25} color="grey" onPress={handleDelTask} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default App;

