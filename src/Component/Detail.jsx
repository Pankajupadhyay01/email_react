import React, { useEffect, useState } from 'react'
import Home from './Home'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Detail = () => {
    const id = useParams().data;
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`).then(res => {
            setdata(res.data)
        })
    }, [id]) 
    return (
        <div className='w-[90%] flex justify-center items-between m-auto pt-[10px]'>
            <div className='w-[40%] flex'>
                <Home />
            </div>
            <div className='w-[50%] flex flex-col p-[20px] mt-[50px] bg-white h-[70vh] overflow-y-scroll'>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <div className="flex w-[30px] h-[30px] rounded-full bg-pink-600 text-center justify-center items-center text-white">P</div>
                        <div className='text-xl'>Lorem ipsum</div>
                    </div>
                    <div className='bg-pink-600 p-[10px] rounded-full'>Mark as favorite</div>
                </div>
                <div>
                    {data.body}
                </div>
            </div>
        </div>
    )
}

export default Detail