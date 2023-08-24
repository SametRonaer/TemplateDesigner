import { useEffect, useState } from "react";
import "./BorderColorItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";

function BorderColorItem(props){
    const currentElement = props.currentElement;
    useEffect(()=> {setCurrentColor(currentElement.fill)}, [currentElement]);
    const[currentColor, setCurrentColor] = useState(currentElement.stroke);
    let functions;
    
    function updateColor(e){
        if(!functions){
            functions = new CanvasFunctions();
            functions.setBorderColor(e.target.value);
        }
        setCurrentColor(e.target.value);
    }

    return <div className="BorderColorItemHolder">
         <div className="BorderColorItemTitle">Border Color:</div>
        <input className="BorderColorItem" value={currentColor} type="color" id="myBorderColor" onInput={updateColor}   ></input>
    </div>;
}

export default BorderColorItem;