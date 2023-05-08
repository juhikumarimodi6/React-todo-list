import React from 'react';
import './App.css';
import {ImCross} from "react-icons/im";

function App() {

  const [input, setInput] = React.useState("");
  const [lists, setLists] = React.useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const updateList = () => {
    setLists((prevList) => {
        return [...prevList, input]
    })
    setInput("")
  }

  const deleteItem = (id) => {
    setLists((prevList) => {
        prevList.splice(id,1);
        console.log(prevList);
        return [...prevList]
    })

  }

  return (
    <div className='app-container'>
      <h1 className='header'>To Do List</h1>
      <div className='add-item'>
        <input 
          type = "text" 
          className='item-input' 
          onChange={handleInput}
          placeholder='Enter List Item Here'
          value={input}
        />
        <button className='add-button' onClick={updateList}>+</button>
      </div>
      {
        lists.map((list,index) => {
          return <div className='list-container' >
                    <ImCross className='cross'onClick={() => deleteItem(index)} />
                    <li key={index} id={index} className='list-item'>
                      {list}
                    </li>
                  </div>
        })
      }

    </div>
  );
}

export default App;
