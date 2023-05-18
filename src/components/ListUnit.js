import React from "react";
import Cross from "./Cross";
import List from "./List";
import Done from "./Done";
import '../App.css'

  //To drag and drop, setting priority of task.
  let itemDragged, listArr, dropIndex;
  let markdoneArr, marked;

const ListUnit = ({list,index,lists,doneCheck,setInput,setLists,setDoneCheck,setEditList,setEditListIndex}) => {
  
  const handleDragStart = (event, index) => {
    itemDragged = lists[index];  // extract drag item from list
    listArr =[...lists];        // create duplicate List array and perform operation into it. 
    listArr.splice(index,1);    // remove element from array at particular index.

    marked=doneCheck[index];      //similarly for the marked/notMarked array
    markdoneArr = [...doneCheck];
    markdoneArr.splice(index,1);
  }

  //Record the drop point index
  const handleDragEnter = (event, id) => {
    dropIndex=id;
  }

  //place list item and assigned marked symbol at drop Point
  const handleDragEnd = () => {
    listArr.splice(dropIndex, 0 , itemDragged);   //insert item in an array at particular index
    setLists([...listArr])                        // overwrite list array with new list array
    markdoneArr.splice(dropIndex, 0 , marked);    //same for marked symbol array
    setDoneCheck([...markdoneArr])
  }

    return <div 
                className='list-unit' 
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

export default ListUnit;