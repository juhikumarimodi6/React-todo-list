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

  //To drag and drop, setting priority of task.
  let itemDragged, listArr, dropIndex;
  let markdoneArr, marked;

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
    console.log(dropIndex)
    listArr.splice(dropIndex, 0 , itemDragged);   //insert item in an array at particular index
    setLists([...listArr])                        // overwrite list array with new list array
    markdoneArr.splice(dropIndex, 0 , marked);    //same for marked symbol array
    setDoneCheck([...markdoneArr])
  }

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
                    handleDragStart = {handleDragStart}
                    handleDragEnter = {handleDragEnter}
                    handleDragEnd = {handleDragEnd}
                  />
        })
      }
    </div>
  );
}

export default App;
