import React from "react";
import '../App.css'

const Input = ({input,setInput,updateList}) => {

  const handleInput = (event) => {
    //extracting the value at input box and stored in state 'input'
    setInput(event.target.value);
  }

  //handle update list when enter key is pressed.
  const handleEnterKey = (event) => {
    if(event.key === 'Enter') {
      updateList();
    }
  }

    return (
        <input 
          type = "text" 
          className='item-input' 
          onChange={handleInput}
          placeholder='Enter List Item Here'
          onKeyDown={handleEnterKey}
          value={input}
        />
    )

}

export default Input;
