import React, { useState, useRef, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; 
import { MdDone } from 'react-icons/md'; 
import { Todo } from '../todo'; 

interface Props { 
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[], 
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>,  
}

interface TodoProps { 
    todo: Todo, 
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, 
    index: number,
}

const TodoElement = ({ todo, todos, setTodos, index}: TodoProps) => { 
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
        <Draggable draggableId = { todo.id.toString() } index = { index }>
            { (provided) => { 
                return  (
                    <form 
                        className = 'todos__single' 
                        onSubmit = { (e) => handleEdit(e, todo.id)} 
                        { ...provided.draggableProps }
                        { ...provided.dragHandleProps} 
                        ref  = { provided.innerRef }>
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
            }}
        </Draggable>
    )
}

const TodoList: React.FC <Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container">
        <Droppable droppableId= {`${Date.now()}`}>
            { (provided) => { 
            return <ul className='todos' ref = { provided.innerRef} {...provided.droppableProps}>
                <span className = 'todos-heading'>Activ e Tasks</span>
                { todos.map((t, index) => { 
                    return ( 
                        <TodoElement index = { index } key = { t.id } todos = { todos } todo = { t } setTodos = { setTodos } />
                    ) 
                })}
                { provided.placeholder }
            </ul>
            } 
            } 
        </Droppable>
        <Droppable droppableId='TodoCompletedList'>
            { (provided) => { 
                return ( 
                    <ul className = 'remove' ref = { provided.innerRef} {...provided.droppableProps}>
                    <span className = 'todos-heading'>Completed Tasks</span>
                        { completedTodos.map((t, index) => { 
                            return ( 
                                <TodoElement index = { index } key = { t.id } todos = { completedTodos } todo = { t } setTodos = { setCompletedTodos } />
                            )
                        })}
                        { provided.placeholder }
                    </ul>
                )
            }}
        </Droppable>
    </div>
  )
}

export default TodoList