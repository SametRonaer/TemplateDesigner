import { useEffect, useState } from "react";
import "./DepthItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";


function DepthItem(props){
     let functions;
     const [currentValue, setValue] = useState(0);
     const currentElement =  props.currentElement;

     useEffect(() => {setDepthValue()}, [currentElement]);
    

     function setDepthValue(){
         if(currentElement != null){
            setValue(currentElement.getZIndex());
            
         }
     }

     function onchangeHandler(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        if(currentElement){
            functions.setZIndex( e.target.value);
        }
        setValue(e.target.value);
     }

    return  <>
    <div className="DepthItemHolder">
    <div className="DepthItemTitle"> Depth:</div>
    <input className="DepthItem" type="number" min="0" step="1" value={currentValue} onChange={onchangeHandler}/>
    </div>
    </>
}

export default DepthItem;