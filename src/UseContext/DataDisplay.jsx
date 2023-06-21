import React, { useContext, useEffect, useState } from 'react'
import  {usecontext} from './context'

export default function DataDisplay() {

    let context = useContext(usecontext)

  return (
    <>
      <div>
            {/* {context.data.map((item)=> <p> {item}</p>)} */}
            {/* {data.map((item)=> <p className=' text-black text-lg'>{item}</p>)} */}
            {context.data.map((item) => <p className=' my-3 border w-1/2 p-1'>{item}</p>)}
            
      </div>
    </>
  )
}
