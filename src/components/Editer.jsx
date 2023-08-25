import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'


const Editer = () => {
    const [important, setImportant] = useState(false)
    const [newData, setNewData] = useState({
        title: "",
        about: "",
        category: "New Task",
        important: 'false'
    })


    const base_URL = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()


    const handleSaveBtn = () => {

        if (newData.about.trim().length > 0 && newData.title.trim().length > 0) {
            axios({
                method: 'post',
                url: `${base_URL}/add`,
                data: { data: newData }
            }).then((res) => {
                toast.success('Todo saved 😊');
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

    const handleCancelBtn = () => {
        if (newData.trim().length != 0) {
            if (window.confirm("Todo not saved 🪲")) {
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const handleSetImpotant = () => {
        setImportant(true)
        setNewData((prevData) => ({
            ...prevData, important: true
        }))
        toast.success("Add to important 👍")
    }
    const handleRemoveImpotant = () => {
        setImportant(false)
        setNewData((prevData) => ({
            ...prevData, important: false
        }))
        toast.warn("Remove form imprtant 👍")
    }

    return (
        <div className='flex flex-col w-[90%] sm:w-[550px] h-64 sm:h-[400px] rounded p-2 bg-white'>
            {
                important ? <BsFillBookmarkFill onClick={handleRemoveImpotant} className='ml-auto mr-0 text-2xl cursor-pointer text-imp' /> : <BsBookmark onClick={handleSetImpotant} className='ml-auto mr-0 text-2xl cursor-pointer' />
            }

            <input type="text" className='w-full outline-none' placeholder='title here...'
                value={newData.title}
                name='title'
                onChange={handleChange}
            />
            <textarea className='outline-none block w-full h-full pt-1'
                placeholder='discribe here...'
                value={newData.about}
                name='about'
                onChange={handleChange}
            ></textarea>
            <div className='flex justify-between mt-2 gap-4'>
                <button className='bg-green-600 py-1 px-1 w-1/3 rounded text-white hover:bg-green-900 transition-all duration-300'
                    onClick={handleCancelBtn}
                >cancel</button>
                <button className='bg-blue-600 py-1 px-1 w-1/3 rounded text-white  hover:bg-blue-900 transition-all duration-300'
                    onClick={handleSaveBtn}
                >save</button>
            </div>
        </div>
    )
}

export default Editer