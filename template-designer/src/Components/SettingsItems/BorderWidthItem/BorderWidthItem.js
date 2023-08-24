
import { useEffect, useState } from "react";
import "./BorderWidthItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";


function BorderWidthItem(props){
     let functions;
     const [currentValue, setValue] = useState(0);
     const currentElement =  props.currentElement;

     useEffect(() => {setWidthValue()}, [currentElement]);
    

     function setWidthValue(){
         if(currentElement != null){
            setValue(currentElement.strokeWidth);
         }
     }

     function onchangeHandler(e){
        if(!functions){
            functions = new CanvasFunctions();
            functions.setBorderWidth(e.target.value);
        }
        setValue(e.target.value);
     }

    return  <>
    <div className="BorderWidthItemHolder">
    <div className="BorderWidthItemTitle"> Border Width:</div>
    <input className="BorderWidthItem" type="number" min="0" step="1" value={currentValue} onChange={onchangeHandler}/>
    </div>
    </>
}

export default BorderWidthItem;