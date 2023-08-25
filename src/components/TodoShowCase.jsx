import React from 'react'
import { TbChecks } from 'react-icons/tb'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const TodoShowCase = ({ _this }) => {

    // console.log(_this);
    const convertTo12HourTimeInIndia = () => {
        const date = new Date(_this.createdAt);

        const options = {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
        };

        const time = date.toLocaleString('en-US', options);
        const newDate = date.toLocaleDateString({
            year: 'numeric', month: 'long'
        })
        return { time, newDate };
    }

    return (
        <div className={`group ${_this.important ? 'bg-imp' : ''} relative w-[250px] h-[150px] rounded p-2 overflow-hidden`} >
            <div className='w-full h-full relative' >
                <h1>{_this.title}</h1>
                <div className='overflow-hidden flex flex-col '>
                    <p className='overflow-ellipsis line-clamp-2 text-white'>
                        {_this.about}</p>
                </div>
                <div className='flex justify-between absolute bottom-1 w-full text-[0.8rem]'>
                    <p>{convertTo12HourTimeInIndia().newDate}</p>
                    <p className='italic'>{convertTo12HourTimeInIndia().time}</p>
                </div>
            </div >

            <div className='absolute left-0 bottom-0 h-0 w-full p-0 flex justify-evenly items-center group-hover:h-[50px] group-hover:p-1 transition-all duration-300 overflow-hidden backdrop-blur-[2px] bg-white/30' >
                <RiCheckboxCircleFill className='text-2xl cursor-pointer text-done' />
                {
                    _this.important ? <BsFillBookmarkFill className='text-xl cursor-pointer text-imp'
                        onClick={() => {
                            _this.setImp(false)
                            _this.removeFormImpList(_this._id)
                            _this.getAllTodos()
                            console.log('remove', _this.imp);
                        }}
                    /> : <BsBookmark className='text-xl cursor-pointer'
                        onClick={() => {
                            _this.handleBookmarked(_this._id)
                            // _this.setImp(true)
                            // _this.removeFormImpList(_this._id)
                            // _this.getAllTodos()
                            // console.log('add', _this.imp);
                        }}
                    />
                }

                <FaTrashAlt className='text-xl cursor-pointer' onClick={() => {
                    _this.deleteTodo(_this._id)
                    _this.getAllTodos()
                }} />
            </ div>
        </div >
    )
}

export default TodoShowCase