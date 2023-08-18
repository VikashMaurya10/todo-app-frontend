import React from 'react'
import './App.css'
import InsertTodo from './components/InsertTodo'
// import GetAllTodos from './components/GetAllTodos'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-gray-400 h-screen'>
      <InsertTodo />
      {/* <GetAllTodos /> */}


      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </main>

  )
}

export default App
