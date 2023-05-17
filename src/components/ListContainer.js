import React from "react";
import Cross from "./Cross";
import List from "./List";
import Done from "./Done";
import '../App.css'

const ListContainer = ({list,index,lists,doneCheck,setInput,setLists,setDoneCheck,setEditList,setEditListIndex,handleDragStart, handleDragEnter,handleDragEnd}) => {

    return <div 
                className='list-container' 
                draggable 
                onDragStart={(event) => handleDragStart(event,index)} 
                onDragEnter={(event) => handleDragEnter(event,index)}
                onDragEnd={handleDragEnd}
                >
                <Cross 
                    index = {index}
                    setLists = {setLists}
                    setDoneCheck = {setDoneCheck}
                />
                <List 
                    list = {list}
                    index = {index}
                    lists = {lists}
                    doneCheck = {doneCheck}
                    setInput = {setInput}
                    setEditList = {setEditList}
                    setEditListIndex = {setEditListIndex}
                />
                <Done 
                    index = {index}
                    doneCheck = {doneCheck}
                    setDoneCheck = {setDoneCheck}
                />
        </div>
}

export default ListContainer;
// 