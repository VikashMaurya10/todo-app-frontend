import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import trash from '../assets/trash.gif'
import { LuEdit } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'
import TodoShowCase from './TodoShowCase'



const InsertTodo = () => {
    const [note, setNote] = useState('')
    const [allTodo, setAllToDo] = useState([])
    const base_URL = import.meta.env.VITE_BASE_URL

    // add new todo
    const addTodo = () => {
        if (note.trim().length > 0) {
            axios({
                method: 'post',
                url: `${base_URL}/add`,
                data: { data: note }
            }).then((res) => {
                setNote('')
                toast.success('Todo saved 😊');
                getAllTodos()
                console.log(res.data);
            }).catch((err) => {
                toast.error('Network error Todo not saved 🪲');
                console.log(err);
            })
        }
        else {
            toast.warn('Todo could not be empty 🤦‍♂️');
        }
    }

    // get all todos list
    const getAllTodos = () => {
        axios({
            method: 'get',
            url: `${base_URL}/list-todos`
        }).then((res) => {
            setAllToDo(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    // delete a todo by id
    const deleteTodo = (id) => {
        axios({
            method: 'delete',
            url: `${base_URL}/delete/${id}`,
        }).then((res) => {
            getAllTodos()
            console.log(res.data.data);
            toast.success("Todo deleted 👍")

        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        getAllTodos()
    }, [])


    return (
        <>
            <section>
                <div className='bg-gray-300 px-2 py-1 rounded w-60 h-60'>
                    <textarea className='text-base w-full h-5/6 bg-transparent outline-none' placeholder="Note here..."
                        value={note}
                        onChange={(e) => {
                            setNote(e.target.value)
                        }}
                    ></textarea >
                    <button className='text-red-900' onClick={addTodo}> Add</button>
                </div>
            </section>
            {/* <section className='w-[235px]'>
                {
                    allTodo.length != 0 ?
                        <>{allTodo?.map((value, index) => {
                            const { _id, data } = value
                            return (
                                <div key={index} className='flex justify-between w-full bg-slate-900 mt-2 p-2  rounded-md'>
                                    <p className='text-white' >{data}</p>
                                    <div className='h-6 flex items-center'>
                                        <img className='object-contain h-full cursor-pointer' src={trash} onClick={() => {
                                            deleteTodo(_id)
                                        }} alt="loading" />

                                        <NavLink to={`/update/${_id}`}>
                                            <LuEdit className=" text-white  cursor-pointer" /></NavLink>
                                    </div>
                                </div>
                            )
                        })}</>
                        : (<p>Task not yet!</p>)
                }
            </section> */}
            <TodoShowCase />
        </>
    )
}

export default InsertTodo