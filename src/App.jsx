import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState('')

  const addTodo = () => {
    axios({
      method: 'post',
      url: 'https://todo-app-backend-3byd.vercel.app/add',
      data: { data: note }
    }).then((res) => {
      console.log(res);
    }).catch(err => console.log(err))
    console.log("data send");
  }


  return (
    <section className='grid place-items-center h-screen bg-gray-400'>
      <div className='bg-gray-300 px-2 py-1 rounded flex gap-3'>
        <input type="text" className='bg-transparent focus:outline-none text-base' placeholder="Note here..."
          onChange={(e) => {
            setNote(e.target.value)
          }}
        />
        <button className='text-red-900' onClick={addTodo}> Add</button>
      </div>
    </section>
  )
}

export default App
