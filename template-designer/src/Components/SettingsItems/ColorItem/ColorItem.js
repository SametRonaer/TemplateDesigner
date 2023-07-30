import { useEffect, useState } from "react";
import "../SettingsItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";

function ColorItem(props){
    const currentElement = props.currentElement;
    useEffect(()=> {setCurrentColor(currentElement.fill)}, [currentElement]);
    const[currentColor, setCurrentColor] = useState(currentElement.fill);
    let functions;
    
    function updateColor(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        setCurrentColor(e.target.value);
        currentElement.set("fill", e.target.value);
        functions.renderAll();
    }

    return <div className="SettingsItem">
        <input className="ColorPickerField" value={currentColor} type="color" id="myColor" onInput={updateColor}   ></input>
    </div>;
}

export default ColorItem;