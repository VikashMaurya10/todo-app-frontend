import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const InsertTodo = () => {
    const [note, setNote] = useState('')

    const addTodo = () => {
        if (note.trim().length > 0) {
            axios({
                method: 'post',
                // url: 'https://todo-app-backend-ls4r-git-test-vikashmaurya10.vercel.app/add',
                url: 'http://localhost:5001/add',
                data: { data: note }
            }).then((res) => {
                console.log(res.data);
            }).catch(err => console.log(err))
            toast.success('Todo saved 😊');
        }
        else {
            toast.warn('To do could not be empty 🤦‍♂️');
        }
    }
    return (
        <section>
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

export default InsertTodo