import { useEffect, useState } from "react";
import "./ColorItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";

function ColorItem(props){
    const currentElement = props.currentElement;
    useEffect(()=> {setCurrentColor(currentElement.fill)}, [currentElement]);
    const[currentColor, setCurrentColor] = useState(currentElement.fill);
    let functions;
    
    function updateColor(e){
        if(!functions){
            functions = new CanvasFunctions();
            functions.setBodyColor(e.target.value);
        }
        setCurrentColor(e.target.value);
    }

    return <div className="ColorItemHolder">
        <div className="ColorItemTitle"> Color:</div>
        <input className="ColorItem" value={currentColor} type="color" id="myColor" onInput={updateColor}   ></input>
    </div>;
}

export default ColorItem;