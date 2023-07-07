import React from "react"

interface Props {
  todo: string, 
  setTodo: React.Dispatch<React.SetStateAction<string>> 
  handleAdd: (e: React.FormEvent) => void, 
}

const InputField: React.FC<Props>  = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className = "input" onSubmit = { (e) => { handleAdd(e) }  }>
        <input type="text"
          value = { todo }
          placeholder = '...enter a task'
          onChange = { (e) => setTodo(e.target.value)}
          className = 'input__box'
        />
        <button className = 'input__submit' type = 'submit'> GO </button>
    </form>
  )
}

export default InputField