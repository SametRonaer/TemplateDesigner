
import { useEffect, useState } from "react";
import "./TextItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";


function TextItem(props){
    let functions;
    const currentElement =  props.currentElement;
    const [currentValue, setValue] = useState(currentElement.text);

    useEffect(() => {setValue(currentElement.text)}, [currentElement]);
    

     function onchangeHandler(e){
        if(!functions){
            functions = new CanvasFunctions();
        }
        if(currentElement){
            functions.setText(e.target.value);
        }
        setValue(e.target.value);
     }

    return  <>
    <div className="TextItemHolder">
    <div className="TextItemTitle"> Text:</div>
    <input className="TextItem" type="text"  value={currentValue} onChange={onchangeHandler}/>
    </div>
    </>

}

export default TextItem;