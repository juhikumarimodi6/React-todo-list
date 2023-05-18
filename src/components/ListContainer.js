import React from "react";
import ListUnit from "./ListUnit";

const ListContainer = ({lists,doneCheck,setInput,setLists,setDoneCheck,setEditList,setEditListIndex}) => {
    return (
        <div className='list-container'>
        {
          lists.map((list,index) => {
            return  <ListUnit
                      list = {list}
                      index = {index}
                      lists = {lists}
                      doneCheck = {doneCheck}
                      setInput = {setInput}
                      setLists = {setLists}
                      setDoneCheck = {setDoneCheck}
                      setEditList = {setEditList}
                      setEditListIndex = {setEditListIndex}
                    />
          })
        }
        </div>
    )
}

export default ListContainer;