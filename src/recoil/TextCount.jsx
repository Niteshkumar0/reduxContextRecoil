import React from 'react'
import { counting } from './Selector'
import { useRecoilValue } from 'recoil'

export default function TextCount() {
    let value = useRecoilValue(counting)
  return (
    <>
      count : {value}
    </>
  )
}
