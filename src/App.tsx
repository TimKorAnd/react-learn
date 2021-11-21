import React    from 'react';
import Todolist from "./Todo/Todolist";

function App() {
    const todos: TodoItem[] = [
        {id: 1, completed: false, title: 'Buy a brot'},
        {id: 2, completed: false, title: 'Buy a oil'},
        {id: 3, completed: false, title: 'Buy a milk'},
    ]

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>
        <Todolist todos={todos}/>
    </div>
  );
}

export default App;
