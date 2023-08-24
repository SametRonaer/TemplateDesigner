import { useEffect, useState } from "react";
import "./CanvasColorItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";

function CanvasColorItem(props){
 //   useEffect(()=> {setCurrentColor()}, []);
    const[currentColor, setCurrentColor] = useState("#ffffff");
    let functions ;

    function updateColor(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        functions.setCanvasColor(e.target.value);
        setCurrentColor(e.target.value);
       
    }

    return <div className="CanvasColorItemHolder">
        <div className="CanvasColorItemTitle"> Background Color:</div>
        <input className="CanvasColorItem" value={currentColor} type="color" id="canvasColor" onInput={updateColor}   ></input>
    </div>;
}

export default CanvasColorItem;