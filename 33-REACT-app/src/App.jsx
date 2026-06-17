import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [todoList, setTodoList] = useState([])

  const getRandID = () => {
    return Math.ceil(Math.random() * (9999 - 1000) + 1000)
  }

  const addHandler = (text) => {
    if (todoList.find(el => el.text === text)) return false

    const newList = [...todoList]
    newList.push({
      id: getRandID(),
      text: text,
      isDone: false
    })
    setTodoList(newList)
    return true
  }

  const actionHandler = (id, action) => {
    const newList = [...todoList]
    const index = newList.findIndex(el => el.id === id)
    switch (action) {
      case 'setDone':
        newList[index].isDone = true
        break;
      case 'delete':
        if (confirm("delete item?"))
          newList.splice(index, 1)
        break;
      case 'copy':
        newList.push({
          id: getRandID(),
          text: newList[index].text + ' (copy)',
          isDone: false
        })
        break;
    }
    setTodoList(newList)
  }

  return (
    <div className="container">
      <ToDoForm onAdd={addHandler} />

      <ToDoList
        list={todoList}
        onAction={actionHandler}
      />
    </div>
  )
}

export default App