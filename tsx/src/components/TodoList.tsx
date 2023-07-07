import React, { useState, useRef, useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; 
import { MdDone } from 'react-icons/md'; 
import { Todo } from '../todo'; 

interface Props { 
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, 
}

interface TodoProps { 
    todo: Todo, 
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, 
}

const TodoElement = ({ todo, todos, setTodos}: TodoProps) => { 
    const [ edit, setEdit ] = useState<boolean> (false); 
    const [ editTodo, setEditTodo ] = useState<string> (todo.todo); 
    const inputRef = useRef <HTMLInputElement> (null); 

    useEffect( () => { 
        inputRef.current?.focus(); 
    }, [edit])

    const handleDone = (id: number) => { 
        setTodos(todos.map(t => t.id === id ? { ...t, isDone: !t.isDone }: t)); 
    }

    const handleDelete = (id: number) => { 
        setTodos(todos.filter(t => t.id !== id)); 
    }

    const handleEdit = (e: React.FormEvent, id: number) => { 
        e.preventDefault(); 

        setTodos(todos.map(t => t.id === id ? { ...t, todo: editTodo } : todo )); 
        setEdit(false); 
    }

    return ( 
        <form className = 'todos__single' onSubmit = { (e) => handleEdit(e, todo.id)}>
            { edit ? 
                ( 
                    <input ref = { inputRef } value = { editTodo } onChange = { (e) => setEditTodo(e.target.value)} className = 'single-text' /> 
                ): 
                 todo.isDone ? 
                    (
                        <s className = 'text'> { todo.todo } </s>
                    ): (
                        <span className = 'text'> { todo.todo } </span>
                    )}

            <div>
                <span className = 'icon' onClick = { () => {
                    if(!edit && !todo.isDone) { 
                        setEdit(!edit); 
                    }
                }}>
                    <AiFillEdit /> 
                </span>
                <span className = 'icon' onClick = { () => handleDelete(todo.id)}>
                    <AiFillDelete /> 
                </span>
                <span className = 'icon' onClick = {() => { handleDone(todo.id)}}>
                    <MdDone /> 
                </span>
            </div>
        </form>
    )
}

const TodoList: React.FC <Props> = ({ todos, setTodos }: Props) => {
  return (
    <ul className='todos'>
        { todos.map(t => { 
            return ( 
                <TodoElement key = { t.id } todos = { todos } todo = { t } setTodos = { setTodos } />
            )
        })}
    </ul>
  )
}

export default TodoList