import React from 'react'
import {useRecoilState} from 'recoil'
import {atomData} from './Atom'
import TextCount from './TextCount'
export default function InputRecoil() {
    let [text,setText] = useRecoilState(atomData)
  
    let onChange = (e) => {
        setText(e.target.value)
    }
    return (
    <>
      
      <div className=' outline w-96 flex flex-col items-center '>
        <p className='underline'>input alphabet show in text col and how many alphabet in ths input show in count col this is using recol</p>
        <input type="text" className=' w-4/5 my-2 border block' placeholder='Type here' onChange={onChange} />
        Text :{text}
        <br />
        <TextCount/>
      </div>
    </>
  )
}
