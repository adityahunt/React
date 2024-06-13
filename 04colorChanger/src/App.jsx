import { useState } from 'react'
import './App.css' 
import './index.css';
function App() {
  const [color,setColor] = useState("black")

  return (
    
      <div className={`bg-${color}-500 w-full h-screen duration-200`}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-neutral-300 rounded-xl px-3 py-2'>
            <button
              onClick={()=>setColor("red")}
              className='bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 outline-none px-4 py-1 rounded-full text-white shadow-lg'
            >Red</button>
            <button
              onClick={()=>setColor("green")}
              className='bg-green-500 hover:bg-green-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 outline-none px-4 py-1 rounded-full text-white shadow-lg hover:bg-green-800'
            >Green</button>
            <button
              onClick={()=>setColor("blue")}
              className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 outline-none px-4 py-1 rounded-full text-white shadow-lg'
            >Blue</button>
            <button
              onClick={()=>setColor("lime")}
              className='bg-lime-500 hover:bg-lime-600 active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 outline-none px-4 py-1 rounded-full text-white shadow-lg'
            >Olive</button>
            <button
              onClick={()=>setColor("gray")}
              className='bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 outline-none px-4 py-1 rounded-full text-white shadow-lg'
            >Gray</button>
            <button
              onClick={()=>setColor("yellow")}
              className='bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >Yellow</button>
            <button
              onClick={()=>setColor("pink")}
              className='bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >Pink</button>
            <button
              onClick={()=>setColor("violet")}
              className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >Violet</button>
            <button
              onClick={()=>setColor("purple")}
              className='bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >Purple</button>
            <button
            onClick={()=>setColor("rose")}
              className='bg-rose-500 hover:bg-rose-600 active:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-300 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >Lavender</button>
            <button
              onClick={()=>setColor("white")}
              className='bg-white hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 outline-none px-4 py-1 rounded-full text-black shadow-lg'
            >White</button>
            <button
              onClick={()=>setColor("slate")}
              className='bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 outline-none px-4 py-1 rounded-full text-white shadow-lg'
            >Slate</button>
          </div>
        </div>
      </div>
        
        
      
      

  )
}

export default App
