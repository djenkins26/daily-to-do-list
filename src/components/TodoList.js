import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  // add state to the todos and set it, pass in an empty array
  const [todos, setTodos] = useState([]);

  // add todos in the form, doesn't show multiple spacing
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

  // new todos equal to an empty array pass in todos
  const newTodos = [todo, ...todos]
  // set values to the new todos
  setTodos(newTodos);
};

// function to update todo
const updateTodo = (todoId, newValue) => {
  if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  }

  setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
  );
};
// function to remove todo
const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id)

  // checking to see if the todo is in the array, then remove it
  setTodos(removeArr);
};

// arrow function for completeTodo
const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      // toggle between true and false
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  setTodos(updatedTodos);
};

  return (
    <div>
      <h1>Welcome to your Daily To-Do Planner</h1>
      <h2>Plan Your Day Here</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
