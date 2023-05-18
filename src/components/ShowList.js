import React from "react";
import InputAddUnit from "./InputAddUnit";
import ListContainer from "./ListContainer";

const ShowList = (props) => {
    return (
    <div>
        <InputAddUnit 
          input={props.input}
          editList={props.editList}
          editListIndex={props.editListIndex}
          setInput={props.setInput}
          setDoneCheck={props.setDoneCheck}
          setLists={props.setLists}
          setEditList={props.setEditList}
        /> 
        <ListContainer 
          lists = {props.lists}
          doneCheck = {props.doneCheck}
          setInput = {props.setInput}
          setLists = {props.setLists}
          setDoneCheck = {props.setDoneCheck}
          setEditList = {props.setEditList}
          setEditListIndex = {props.setEditListIndex}
        />
    </div>
    )
}

export default ShowList;