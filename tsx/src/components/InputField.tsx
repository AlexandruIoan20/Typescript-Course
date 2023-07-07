import React from "react"
import { useRef } from "react"

interface Props {
  todo: string, 
  setTodo: React.Dispatch<React.SetStateAction<string>> 
  handleAdd: (e: React.FormEvent) => void, 
}

const InputField: React.FC<Props>  = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className = "input" onSubmit = { (e) => { handleAdd(e); inputRef.current?.blur() }  }>
        <input type="text"
          ref = { inputRef }
          value = { todo }
          placeholder = '...enter a task'
          onChange = { (e) => setTodo(e.target.value)}
          className = 'box'
        />
        <button className = 'input__submit' type = 'submit'> GO </button>
    </form>
  )
}

export default InputField