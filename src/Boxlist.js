// BoxList.js file


import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    // const [boxes, setBoxes] = useState([]);

    return (
        <div>

            < NewBoxForm />

            <Box 
                bgcolor= "blue" 
                width="200px"
                height="100px"/>
            
        </div>
    )
}



export default BoxList;