import {selector} from 'recoil'
import { atomData } from './Atom'
export let counting  = selector({
    key: 'count',
    get : ({get}) => {
        let length = get(atomData)
        return length.length
    }
})