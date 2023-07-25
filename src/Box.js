// Box.js file

import React from "react";

const Box = ({bgcolor, width, height}) => {

    const divStyle = {

        backgroundColor: bgcolor, 
        width: width + "px",
        height: height + "px"

    };
    
    return (
        <div style={divStyle}>
            
        </div>
    )
}

export default Box;