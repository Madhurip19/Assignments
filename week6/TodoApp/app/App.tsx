import React, { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import TaskInput from './TaskInput'; // Directly import from the root
import TaskItem from './TaskItem'; // Directly import from the root
import Layout from './_layout';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTaskHandler = (task: string) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  const deleteTaskHandler = (taskIndex: number) => {
    setTasks((currentTasks) => currentTasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <Layout>
      <Text style={styles.title}>To-Do List</Text>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem task={item} onDelete={() => deleteTaskHandler(index)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
