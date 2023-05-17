import React from "react";
import '../App.css'

const AddButton = ({updateList}) => {
    return (
        <button className='add-button' onClick={updateList}>+</button>
    )
}

export default AddButton;