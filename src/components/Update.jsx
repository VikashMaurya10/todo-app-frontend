import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'



const Update = () => {
  const [prevData, setPrevData] = useState([])
  const [newData, setNewData] = useState()

  const { id } = useParams()
  const base_URL = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()

  // update a todo by id
  const getTodoData = (id) => {
    axios({
      method: 'get',
      url: `${base_URL}/get/${id}`
    }).then((res) => {
      setPrevData(res.data.data)
      setNewData(res.data.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  // update a todo by id
  const updateTodo = (id) => {
    axios({
      method: 'put',
      url: `${base_URL}/update/${id}`,
      data: { data: newData }
    }).then((res) => {
      toast.success("Todo Updated 👍")
    }).catch((err) => {
      console.log(err);
      toast.success("Todo not Updated 🪲")

    })
  }

  useEffect(() => {
    getTodoData(id)
  }, [])

  const handleUpdateBtn = () => {

    if (newData.trim().length === 0) {
      toast.warn("You can't update🤦‍♂️")
      return
    }

    if (prevData.data.length != newData.length) {
      updateTodo(id)
      navigate('/')
    } else {
      toast.warn("You haven't changed yet🤦‍♂️")
    }
  }

  const handleCancelBtn = () => {
    if (prevData.data.length != newData.length) {
      if (window.confirm("Todo not Updated 🪲")) {
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }

  return (
    <div>
      <textarea className='outline-none p-2 block rounded' cols="70" rows="15"
        value={newData}
        onChange={(e) => {
          setNewData(e.target.value)
        }}
      ></textarea>
      <div className='flex justify-between mt-2 gap-4'>
        <button className='bg-green-600 py-1 w-1/3 rounded text-white hover:bg-green-900 transition-all duration-300'

          onClick={handleCancelBtn}
        >cancel</button>
        <button className='bg-blue-600 py-1 w-1/3 rounded text-white  hover:bg-blue-900 transition-all duration-300'
          onClick={handleUpdateBtn}
        >Update</button>
      </div>
    </div>
  )
}

export default Update