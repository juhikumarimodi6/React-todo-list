import React from "react";
import {ImCross} from "react-icons/im";
import {MdDone} from "react-icons/md";

const Instructions = () => {
    return (
        <div className="instructions">
            <h2 className="instructions-header">Instructions:</h2>
            <ul>
                <li>Write the todo list item in the box given.</li>
                <li>Press Enter or Click on (+) button to add item into the list.</li>
                <li>Click on <ImCross /> button to delete the item from lists.</li>
                <li>Click on <MdDone /> symbol if task is completed.</li>
                <li>You can drag and drop the list to set priority.</li>
                <li>You can edit list by clicking on the list and then change the text at input box. Press Enter or click on (+) button to see changes.</li>
            </ul>
        </div>
    )
}

export default Instructions;