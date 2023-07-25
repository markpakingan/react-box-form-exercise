// NewBoxForm.js file
import React, {useState} from "react";


const NewBoxForm = ({addBox}) => {


    const initialState = {
        backgroundcolor: "",
        width: "",
        height: ""
    }


    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, 
            [name]:value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const {backgroundcolor, width, height} = formData;
        const newBoxData = {
            bgcolor: backgroundcolor,
            width: width,
            height: height
          };
        alert(`Response, your BG is ${backgroundcolor}, width is ${width}, height is ${height}`);
        setFormData(initialState);
    }


    return(
        <form>
                <label htmlFor="backgroundcolor">Background Color: </label>
                <input type="text" placeholder="backgroundcolor" name="backgroundcolor"
                    value={formData.backgroundcolor} onChange={handleChange}/>
           
                <label htmlFor="width">Width: </label>
                <input type="text" placeholder="width" name="width"
                    value={formData.width} onChange={handleChange}/>
           
                <label htmlFor="height">Height : </label>
                <input type="text" placeholder="height" name="height"
                    value={formData.height} onChange={handleChange}
                />
           
        
            <button onClick={handleSubmit}>
                Submit!
            </button>
        </form>
    )
}

export default NewBoxForm;