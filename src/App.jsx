import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css'

import InsertTodo from './components/InsertTodo'
import Update from './components/Update'
import Home from './routes/Home';
import Create from './routes/Create';

function App() {
  return (
    <main className='bg-gary min-h-screen bg-gradient-to-r from-cyan p-4'>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />

        {/* <Route path="/" element={<InsertTodo />} /> */}
        {/* <Route path="/update/:id" element={<Update />} /> */}

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
