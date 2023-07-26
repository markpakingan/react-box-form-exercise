// Box.js file

import React from "react";

const Box = ({id, bgcolor, width, height, removeBox}) => {

    const divStyle = {

        backgroundColor: bgcolor, 
        width: width + "px",
        height: height + "px"

    };

    const handleRemove = () => {
        removeBox(id)
    }
    
    return (
        <div style={divStyle}>
            <span onClick={handleRemove}>X</span>
        </div>
    )
}

export default Box;