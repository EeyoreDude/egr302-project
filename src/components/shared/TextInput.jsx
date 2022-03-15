import React from "react";
import { useState } from "react";

function TextInput({name, hasValue}){
    const [value, setValue] = useState('');

    const handleChange = (event) =>{
        setValue(event);
    }

    return(
        <div>
            <label className="font-weight-light">
                {name}
                <br />
                <input type="text" name={name} onChange={handleChange} />
            </label>
        </div>	
    )
}

export default TextInput;