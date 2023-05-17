import React from "react";
import Input from "./Input";
import AddButton from "./AddButton";
import '../App.css'

const InputAddUnit = ({input,editList,editListIndex,setInput,setLists,setDoneCheck,setEditList}) => {
    
    const updateList = () => { 
        //update list if we are edditing the item from list
        if(editList) {
          setLists(prevList => {
            prevList.splice(editListIndex,1,input) // editing list at the same index 
            return prevList;
          })
          setInput("");
          setEditList(false)
          setDoneCheck(prevDoneCheck => {
            prevDoneCheck[editListIndex] = false;
            return [...prevDoneCheck]
          })
        } else if(input !== "") {     //update list if input field is not empty
          setLists((prevList) => {
            return [...prevList, input]
          })
          setDoneCheck(prevDoneCheck => [...prevDoneCheck, false])    //Default DoneCheck is false
          setInput("")
        }
      }
    return (
        <div className='add-item'>
            <Input 
            setInput={setInput}
            input={input}
            updateList={updateList}
            />
            <AddButton 
            updateList={updateList}
            />
        </div>
    )
}

export default InputAddUnit;