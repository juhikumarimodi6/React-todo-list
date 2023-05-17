import React from 'react';
import './App.css';
import Header from './components/Header';
import InputAddUnit from './components/InputAddUnit';
import ListContainer from './components/ListContainer';

function App() {

  const [input, setInput] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const [doneCheck, setDoneCheck] = React.useState([]);
  const [editList, setEditList] = React.useState(false);
  const [editListIndex, setEditListIndex] = React.useState();

  return (
    <div className='app-container'>
      <Header />
      <InputAddUnit 
        input={input}
        editList={editList}
        editListIndex={editListIndex}
        setInput={setInput}
        setDoneCheck={setDoneCheck}
        setLists={setLists}
        setEditList={setEditList}
      />
      {
        lists.map((list,index) => {
          return  <ListContainer
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
  );
}

export default App;
