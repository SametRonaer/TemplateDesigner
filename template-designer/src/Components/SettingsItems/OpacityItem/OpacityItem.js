import { useEffect, useState } from "react";
import "./OpacityItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";


function OpacityItem(props){
    let functions;
     const [currentValue, setValue] = useState(0);
     const currentElement =  props.currentElement;

     useEffect(() => {setOpacityValue()}, [currentElement]);
    

     function setOpacityValue(){
         if(currentElement != null){
            setValue(currentElement.opacity);
            
         }
     }

     function onchangeHandler(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        if(currentElement){
            functions.setOpacity(e.target.value);
        }
        setValue(e.target.value);
     }

    return  <>
    <div className="OpacityItemHolder">
    <div className="OpacityItemTitle"> Opacity:</div>
    <input className="OpacityItem" type="number" max="1" min="0" step={0.01}  value={currentValue} onChange={onchangeHandler}/>
    </div>
    </>

}

export default OpacityItem;