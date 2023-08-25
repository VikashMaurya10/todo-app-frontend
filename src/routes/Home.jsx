import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import TodoShowCase from '../components/TodoShowCase'
import { toast } from 'react-toastify'


const Home = () => {
    const [allTodo, setAllToDo] = useState([])
    const [imp, setImp] = useState(false)

    const base_URL = import.meta.env.VITE_BASE_URL
    const Navigate = useNavigate()

    // create a new todo
    const handleCreateTodo = () => {
        Navigate("/create")
    }

    // get all list of todos
    const getAllTodos = async () => {
        await axios({
            method: 'get',
            url: `${base_URL}/list-todos`
        }).then((res) => {
            setAllToDo(res?.data?.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    // delete todo by getting ID
    const deleteTodo = (id) => {
        axios({
            method: 'delete',
            url: `${base_URL}/delete/${id}`,
        }).then((res) => {
            console.log(res.data.data);
            toast.success("Todo deleted 👍")
            // delete also data form frontend
            setAllToDo((prevData) => prevData.filter((item) => item._id !== id));
        }).catch((err) => {
            console.log(err);
        })
    }

    // remove todo from important list 
    const removeFormImpList = (id) => {
        // setImp(prevImp => !prevImp)
        axios({
            method: 'put',
            url: `${base_URL}/update`,
            data: {
                id: id,
                important: imp
            }
        }).then((res) => {
            toast.success("Todo Updated 👍")
            console.log(res);
        }).catch((err) => {
            console.log(err);
            toast.success("Todo not Updated 🪲")
        })
        // setAllToDo((prevData) => prevData.filter((item) => item._id !== id));
    }

    const handleBookmarked = (id) => {
        setImp(!imp)
        removeFormImpList(id)
        getAllTodos()
        console.log('add', imp);
    }

    useEffect(() => {
        getAllTodos()
        console.log(imp);
    }, [])

    return (
        <>
            <section>
                <div className='fixed bottom-16 right-16 rounded-full z-10'
                    onClick={handleCreateTodo}
                >
                    <BsPlusCircleFill className='text-6xl cursor-pointer text-blue-700 bg-blue-300 rounded-full' />
                </div>
            </section>
            <section className='flex gap-4 w-full justify-evenly'>
                <div className='max-w-[235px] grid gap-4'>
                    {
                        allTodo?.length != 0 ?
                            <>
                                <h1>To day Task</h1>
                                {allTodo?.map((value, index) => {
                                    const { _id, title, about, category, important, createdAt, updatedAt } = value
                                    return (
                                        <TodoShowCase key={index}
                                            _this={{
                                                _id,
                                                title,
                                                about,
                                                category,
                                                important,
                                                createdAt,
                                                updatedAt,
                                                imp,
                                                deleteTodo,
                                                getAllTodos,
                                                removeFormImpList,
                                                setImp,
                                                handleBookmarked
                                            }}
                                        />
                                    )
                                })}
                            </>
                            : (<p>Task not yet!</p>)
                    }
                </div>
                <div className='max-w-[235px] grid gap-4'>
                    {
                        allTodo.length != 0 ?
                            <>
                                <h1>Important</h1>
                                {allTodo?.map((value, index) => {
                                    const { _id, title, about, category, important, createdAt, updatedAt } = value
                                    if (important === true) {
                                        return (
                                            <TodoShowCase key={index}
                                                _this={{
                                                    _id,
                                                    title,
                                                    about,
                                                    category,
                                                    important,
                                                    createdAt,
                                                    updatedAt,
                                                    imp,
                                                    deleteTodo,
                                                    getAllTodos,
                                                    removeFormImpList,
                                                    setImp,
                                                    handleBookmarked
                                                }}
                                            />
                                        )
                                    }

                                })}
                            </>
                            : (<p>Task not yet!</p>)
                    }
                </div>

                {/* <div className='max-w-[235px] grid gap-4'>
                    {
                        allTodo.length != 0 ?
                            <>
                                <h1>Not Completed</h1>
                                {allTodo?.map((value, index) => {
                                    const { _id, data } = value
                                    return (
                                        <div key={index}>
                                            <TodoShowCase />
                                        </div>
                                        // <TodoShowCase key={index}
                                        // // _this={{
                                        // //     _id,
                                        // //     data,
                                        // // }}
                                        // // css='bg-notDone'
                                        // />
                                    )
                                })}
                            </>
                            : (<p>Task not yet!</p>)
                    }
                </div>
                <div className='max-w-[235px] grid gap-4'>
                    {
                        allTodo.length != 0 ?
                            <>
                                <h1>completed</h1>
                                {allTodo?.map((value, index) => {
                                    const { _id, data } = value
                                    return (
                                        <TodoShowCase key={index}
                                            _this={{
                                                _id,
                                                data,
                                            }}
                                            css='bg-done' />
                                    )
                                })}
                            </>
                            : (<p>Task not yet!</p>)
                    }
                </div> */}
            </section>
        </>

    )
}

export default Home