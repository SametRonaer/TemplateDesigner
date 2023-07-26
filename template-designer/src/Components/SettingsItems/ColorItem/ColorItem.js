import { useState } from "react";
import "../SettingsItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";

function ColorItem(){

    const[currentColor, setCurrentColor] = useState("");
    let functions;
    
    function updateColor(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        setCurrentColor(e.target.value);
       const activeElement =  functions.getActiveElement();
       if(activeElement){
        activeElement.set("fill", e.target.value);
       }
        functions.renderAll();
    }

    return <div className="SettingsItem">
        <input className="ColorPickerField" value={currentColor} type="color" id="myColor" onInput={updateColor}   ></input>
    </div>;
}

export default ColorItem;