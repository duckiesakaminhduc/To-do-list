import React from 'react'
import './TaskInput.css'
export default function TaskInput() {
  return (
    <div className=''>
      <div className="title">Title</div>
      <form>
        <input type="text" placeholder='caption goes here'/>
        <button type='submit'>✔️</button>
      </form>
    </div>
  )
}
