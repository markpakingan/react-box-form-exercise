// BoxList.js

import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBoxData) => {
    setBoxes([
      ...boxes,
      { ...newBoxData, id: uuidv4() }
    ]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          bgcolor={box.bgcolor}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
