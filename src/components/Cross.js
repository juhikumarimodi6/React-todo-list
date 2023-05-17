import React from "react";
import {ImCross} from "react-icons/im";
import '../App.css'

    const Cross = ({index,setLists,setDoneCheck}) => {

    //delete the particular item from list and corresponding DoneCheck mark.
    const deleteItem = (index) => {
        setLists((prevList) => {
            prevList.splice(index,1);
            return [...prevList]
        })
        setDoneCheck((prevDoneCheck) => {
          prevDoneCheck.splice(index,1);
          return [...prevDoneCheck]
        })
      }
    

    return <ImCross 
            className='cross'
            onClick={() => deleteItem(index)} 
            />
}

export default Cross;