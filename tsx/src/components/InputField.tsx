const InputField = () => {
  return (
    <form className = "input">
        <input type="input" placeholder = '...enter a task' className = 'input__box' />
        <button className = 'input__submit' type = 'submit'> GO </button>
    </form>
  )
}

export default InputField