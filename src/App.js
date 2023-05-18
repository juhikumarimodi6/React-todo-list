import React from 'react';
import './App.css';
import Header from './components/Header';
import HelpButton from './components/HelpButton';
import Instructions from './components/Instructions';
import ShowList from './components/ShowList';

function App() {

  const [input, setInput] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const [doneCheck, setDoneCheck] = React.useState([]);
  const [editList, setEditList] = React.useState(false);
  const [editListIndex, setEditListIndex] = React.useState();
  const [needHelp, setNeedHelp] = React.useState(false);

  return (
    <div className='app-container'>
      <Header />

      {needHelp ? <Instructions /> :
                  <ShowList 
                    input={input}
                    lists = {lists}
                    doneCheck = {doneCheck}
                    editList={editList}
                    editListIndex={editListIndex}
                    setInput={setInput}
                    setDoneCheck={setDoneCheck}
                    setLists={setLists}
                    setEditList={setEditList}
                    setEditListIndex = {setEditListIndex}
                  /> }

      <HelpButton 
        needHelp = {needHelp} 
        setNeedHelp = {setNeedHelp}
      />
    </div>
  );
}

export default App;
