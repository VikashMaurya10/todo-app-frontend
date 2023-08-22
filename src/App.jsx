import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css'

import InsertTodo from './components/InsertTodo'
import Update from './components/Update'

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-gray-400 h-screen'>
      <Routes>
        <Route path="/" element={<InsertTodo />} />
        <Route path="/update/:id" element={<Update />} />

        {/* <GetAllTodos /> */}



      </Routes >
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
    </main >
  )
}

export default App
