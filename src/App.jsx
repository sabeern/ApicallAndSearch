import { useState } from 'react';
import TodoList from './todoList';
import UserList from './UserList';

function App() {
  return(
    <>
      <h1>Higher Order Component</h1>
      <UserList/>
      <TodoList/>
    </>
  );
}

export default App
