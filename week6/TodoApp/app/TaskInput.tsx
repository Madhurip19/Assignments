import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = (enteredText: string) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    if (enteredTask.length > 0) {
      onAddTask(enteredTask);
      setEnteredTask(''); // Clear the input field after adding the task
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Task"
        style={styles.textInput}
        value={enteredTask}
        onChangeText={taskInputHandler}
      />
      <Button title="ADD" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default TaskInput;
