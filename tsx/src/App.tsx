import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './todo';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => { 
  const [ todo, setTodo] = useState<string>(""); // useState <type> - merge si union <string | number > 
  const [ todos, setTodos ] = useState<Todo[]>([]); 
  const [ completedTodos, setCompletedTodos ] = useState<Todo[]>([]); 

  const handleAdd = (e: React.FormEvent) => { 
    e.preventDefault(); 

    if(todo) { 
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); 
      setTodo(""); 
    }
  }

  const onDragEnd = (result: DropResult) => { 
    console.log(result); 
    console.log("Something there")
  }

  return ( 
    <DragDropContext onDragEnd={ () => { onDragEnd }}>
      <div className = 'app'>
        <span className = 'heading'> Taskify </span>

        <InputField todo = { todo } setTodo = { setTodo } handleAdd = { handleAdd } /> 
        <TodoList todos = { todos } setTodos = { setTodos } completedTodos = { completedTodos } setCompletedTodos = { setCompletedTodos } />
      </div>
    </DragDropContext>
  )
}


export default App
