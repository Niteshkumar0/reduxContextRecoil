import React,{createContext, useState} from "react";

export let usecontext = createContext();

 let Context = (props) => {
    let [data,setData] = useState([])
 
    return(
    <usecontext.Provider value={{data,setData}}>
        {props.children}
    </usecontext.Provider>
    )
}
export default Context;