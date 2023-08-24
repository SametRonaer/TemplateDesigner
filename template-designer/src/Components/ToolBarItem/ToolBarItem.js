import { alphaImage, circle, image, rectangle, solidCircle, solidRectangle, text } from "../../Constants/appConstants";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import ImageItem from "../CustomTools/ImageItem/ImageItem";
import "./ToolBarItem.css";



function ToolBarItem(props){
    
    
    

const defaultItem = <div className="ToolBarItem" onClick={getItemFunction}>
           {props.icon}
    </div>
    


 const currentItem =  props.item == image ? <ImageItem icon = {props.icon}/>: defaultItem;
    
    
    return currentItem;



function getItemFunction(e){
    const functions = new CanvasFunctions();
    
    
    if(props.item == image){
     
    }else if(props.item == alphaImage){
        functions.addAlphaImage(e);
    }else if(props.item == solidCircle){
          functions.addSolidCircle();
         
        }
        else if(props.item == solidRectangle){
            functions.addSolidRect("#cd1d1d");
        }
        else if(props.item == rectangle){
            functions.addBorderedRect("#cd1d1d");
        }
        else if(props.item == circle){
        functions.addBorderedCircle();
        
    }
    else if(props.item == text){
        functions.addText("Text");

        }
    }
}

export default ToolBarItem;