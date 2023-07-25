// BoxList.js file


import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);

    const addBox = (newBoxData) => {
        setBoxes((prevBoxes) => [...prevBoxes, newBoxData]);
      };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map((box, index) => (
                <Box
                key={index}
                bgcolor={box.bgcolor}
                width={box.width}
                height={box.height}
                />
            ))}
        </div>
    );
}



export default BoxList;