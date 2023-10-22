import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Detail from "./Component/Detail";


const App = () => {
  return (
    <div className=" bg-slate-300">
      <BrowserRouter >
        <div className='w-[90%] flex flex-col justify-center items-center m-auto pt-[10px]'>
          <div className='w-full flex gap-x-5'>
            <div className=''>Filter By:</div>
            <div className=''>Unread</div>
            <div className='bg-gray-400 rounded-full p-[0px_10px]'>Read</div>
            <div className=' '>Favorites</div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail/:data" element={<Detail />} />
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App
