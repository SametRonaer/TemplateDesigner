
import { useEffect, useState } from "react";
import "./TextSizeItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";


function TextSizeItem(props){
    let functions;
    const currentElement =  props.currentElement;
    const [currentValue, setValue] = useState(18);

    useEffect(() => {setValue(currentElement.fontSize)}, [currentElement]);
    

     function onchangeHandler(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        if(currentElement){
            functions.setTextSize(e.target.value);
        }
        setValue(e.target.value);
     }

    return  <>
    <div className="TextSizeItemHolder">
    <div className="TextSizeItemTitle"> Font Size:</div>
    <input className="TextSizeItem" type="number" max="100" min="4" step={1}  value={currentValue} onChange={onchangeHandler}/>
    
    </div>
    </>

}

export default TextSizeItem;