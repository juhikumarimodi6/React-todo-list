import React from "react";

const HelpButton = ({needHelp,setNeedHelp}) => {

    const handleNeedHelp = () => {
        setNeedHelp(prevNeedHelp => !prevNeedHelp) 
    }

    return (
        <div>
            <button className = "help-button" onClick={handleNeedHelp}>
                {needHelp ? "Go To List" : "Need Help"}
            </button>  
        </div>
    )
}

export default HelpButton;