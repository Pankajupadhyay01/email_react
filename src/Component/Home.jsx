import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mail } from '../redux/apiSlice'

const Home = () => {
    const dispatch = useDispatch()
    const [page, setpage] = useState(1);

    useEffect(() => {
        mail(dispatch, page)
    }, [page])

// array data 
    const data = useSelector((state) => state.resume)
    
    // functions

    const func = (param) => { 
        if(param=="pre"){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setpage(page==1?page:page-1);
        }
        if(param=="next"){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setpage(page==1?page+1:page);
        }
    }
    return (
        <div className='w-[90%] flex flex-col justify-center items-center m-auto pt-[10px]'>
            <div className='w-full flex gap-x-5'>
                <div className=''>Filter By:</div>
                <div className=''>Unread</div>
                <div className='bg-gray-400 rounded-full p-[0px_10px]'>Read</div>
                <div className=' '>Favorites</div>
            </div>

            <div className='w-full flex flex-col my-[40px] gap-y-9'>
                {
                    (data.mail).map((pro, i) => (
                        <div className='flex gap-5 items-center  border-2 border-black p-4'>
                            <div className="flex w-[30px] h-[30px] rounded-full bg-pink-600 text-center justify-center items-center text-white">P</div>
                            <div className="right">
                                <div>From:- {pro.from?.name} &#9001; <span>{pro.from?.email}</span> &#x3009; </div>
                                <div> Subject:- <span>{pro.subject}</span> </div>
                                <div className='my-[10px]'>{pro.short_description}</div>
                                <div className='flex gap-x-4'>
                                    <div>24/09/2023</div>
                                    <div className=' text-pink-500'>Favorite</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex gap-8'>
                <button onClick={() => func("pre")} className='bg-gray-700 p-2 text-white'>Previous</button>
                <button onClick={() => func("next")} className='bg-gray-700 p-2 text-white'>Next</button>
            </div>

        </div>
    )
}

export default Home