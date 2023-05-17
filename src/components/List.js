import React from "react";
import '../App.css'

const List = ({list, index, lists, doneCheck, setInput, setEditList, setEditListIndex}) => {

    //To handle edit list
    const handleEdit = (id) => {
      setInput(lists[id])
      setEditListIndex(id);
      setEditList(true);
    }

    return (
        <li 
        key={index} 
        id={index} 
        className={doneCheck[index]?  'list-item list-item-done' :  'list-item'} 
        onClick={() => handleEdit(index)}
        >
          {list}
        </li>
    )
}

export default List;