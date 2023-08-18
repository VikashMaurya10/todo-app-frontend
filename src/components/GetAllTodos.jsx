import axios from 'axios'
import React, { useEffect, useState } from 'react'
import trash from '../assets/trash.gif'
import { toast } from "react-toastify"

const GetAllTodos = () => {
    const [allTodo, setAllToDo] = useState([])
    const base_URL = import.meta.env.VITE_BASE_URL

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
        <section className='w-[200px]'>
            {
                allTodo?.map((value, index) => {
                    const { _id, data } = value

                    return (
                        <div key={index} className='flex justify-between w-full bg-slate-900 mt-2 p-2  rounded-md'>
                            <p className='text-white' >{data}</p>
                            <div className='h-6 w-6 cursor-pointer' onClick={() => {
                                deleteTodo(_id)
                            }}><img className='object-contain w-full h-full' src={trash} alt="loading" /></div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default GetAllTodos