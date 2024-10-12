import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TaskItemProps {
  task: string;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text>{task}</Text>
      <Button title="DELETE" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TaskItem;
