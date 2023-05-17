import React from "react";
import {MdDone} from "react-icons/md";
import '../App.css'

const Done = ({index,doneCheck,setDoneCheck}) => {
    
     //To mark if the task is completed or not.
    const handleMarkDone = (id) => {
        setDoneCheck((prevDoneCheck) => {
          prevDoneCheck[id]=!prevDoneCheck[id];
          return [...prevDoneCheck];
        } )
      }
    
    return <MdDone 
            className={doneCheck[index]? "tick tick-done" : "tick"} 
            onClick={() => handleMarkDone(index)}
        />
}

export default Done;