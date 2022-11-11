import React, { useState } from 'react'

const TodoListCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return <div>
    <input type="text" value={inputValue} onChange={handleChange}/>
    <button>添加待完成项</button>
    asldkfjnaasdfasd
    asldfjalskjdfklaj
  </div>
}
export default TodoListCreator
