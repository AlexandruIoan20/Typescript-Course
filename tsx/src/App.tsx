import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './todo';
import TodoList from './components/TodoList';

const App: React.FC = () => { 
  const [ todo, setTodo] = useState<string>(""); // useState <type> - merge si union <string | number > 
  const [ todos, setTodos ] = useState<Todo[]>([]); 

  const handleAdd = (e: React.FormEvent) => { 
    e.preventDefault(); 

    if(todo) { 
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); 
      setTodo(""); 
    }
  }

  return ( 
    <div className = 'app'>
      <span className = 'heading'> Taskify </span>

      <InputField todo = { todo } setTodo = { setTodo } handleAdd = { handleAdd } /> 
      <TodoList />

      <ul>
        { todos.map(t => { 
          return ( 
            <li>{ t.todo } </li>
          )
        })}
      </ul>
    </div>
  )
}


export default App
