import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='ToDo'>
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon className='icon' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
