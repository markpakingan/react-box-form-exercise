// Box.js file

import React from "react";

const Box = ({bgcolor, width, height}) => {

    const divStyle = {

        backgroundColor: bgcolor, 
        width: width,
        height: height

    };
    
    return (
        <div style={divStyle}>
            This is where the style will appear
        </div>
    )
}

export default Box;