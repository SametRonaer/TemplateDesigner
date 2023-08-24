import "./ImageItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";
import {  BsImage } from "react-icons/bs";


    

function ImageItem(){
    
    const imageIcon = <BsImage size={20} color="grey"/>
    
    
function clickHandler(e){
    const functions = new CanvasFunctions();
    functions.addImage(e);
}


return  <div className="ImageItemOutline">
    <input
    className="ImageItem"
    type="file"
    id="file"
    onChange={clickHandler}
    />
    <div className="ImageIcon">
    {imageIcon}
    </div>
</div>

}

export default ImageItem;


