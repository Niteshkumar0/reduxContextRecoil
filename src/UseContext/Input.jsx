import React, { useContext, useEffect, useState } from 'react'
import {usecontext} from './context'
import DataDisplay from './DataDisplay'
export default function Input() {
    let context = useContext(usecontext)

    let [data,setData] = useState([])

    let storeData = (e) => {
        e.preventDefault()
        context.setData([...context.data,data])
        setData('')
    }
  
  return (
    <>
      <div className=' w-96 min-h-72 border flex flex-col text-center justify-center'>
    <h1 className=' underline'>Adding the item Using context</h1>
        <form>
        <input type="text" value={data} className=' outline mt-4 w-60 p-1' onChange={(e) => setData(e.target.value)} placeholder=' Add a Item ' />
        <button className=' border ml-6 py-1 bg-slate-500 text-white px-5' onClick={storeData}>Add</button>
        </form>
       <DataDisplay className=' bg-black text-xl'/>
      </div>


    </>
  )
}
