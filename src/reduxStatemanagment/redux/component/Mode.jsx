import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {lightMode} from '../ModeData'

export default function Mode() {
  let [text,setText] = useState('')
    let selector = useSelector((state) => state.mode.dark)
    useEffect(()=>{
      if (selector) {
        setText('Dark Mode')
      }else{
        setText('Light Mode')
      }
    },[text])
    let dispatch = useDispatch()
  return (
    <>
  
    <div className='outline w-64 h-96 ml-5'>
    <h1 className='mx-4 my-4'>Changing light mode to Dark Mode Using Redux</h1>
      <div className={` ${selector? 'bg-black': 'bg-slate-200'} w-60 h-60 text-center  mb-4 outline`}>
            <h1 className={`${selector? ' text-white': 'text-black'}`}>{selector? 'dark mode': 'light mode'}</h1>
      </div>

      <button className='border bg-slate-200 rounded-sm ml-4 p-2' onClick={() => dispatch(lightMode())}>Change The Mode</button>
</div>
    </>
  )
}
