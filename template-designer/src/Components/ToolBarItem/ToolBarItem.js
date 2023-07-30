import { alphaImage, circle, image, rectangle, solidCircle, solidRectangle, text } from "../../Constants/appConstants";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import ImageItem from "../CustomTools/ImageItem/ImageItem";
import "./ToolBarItem.css";

function ToolBarItem(props){
    
const defaultItem = <div className="ToolBarItem" onClick={getItemFunction}>
        {props.item}
    </div>
    


 const currentItem =  props.item == image ? <ImageItem/>: defaultItem;
    
    
    return currentItem;



function getItemFunction(){
    const functions = new CanvasFunctions();
    if(props.item == image){
        functions.addImage();
    }else if(props.item == alphaImage){
        
    }else if(props.item == solidCircle){
          functions.addSolidCircle();
    }
    else if(props.item == solidRectangle){
         functions.addSolidRect("#cd1d1d");
    }
    else if(props.item == rectangle){
        functions.saveAllCanvasAsPng();
    }
    else if(props.item == circle){
        
    }
    else if(props.item == text){
        functions.addText("Text");

        }
    }
}

export default ToolBarItem;