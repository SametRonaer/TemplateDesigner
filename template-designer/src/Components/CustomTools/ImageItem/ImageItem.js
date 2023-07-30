import "./ImageItem.css";
import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";
import { fabric } from "fabric";
import { BsImage } from "react-icons/bs";


    

function ImageItem(){
    
    const imageIcon = <BsImage size={24} />

function addImageToTheCanvas(e){
    const functions = new CanvasFunctions();
    const iamgeUrl = URL.createObjectURL(e.target.files[0]);
    fabric.Image.fromURL(iamgeUrl, function(img){
        img.id = `MyImage${Date.now()}`;
        img.name = "Image";
        img.scaleToWidth(300);
       functions.addImage(img);
        
    });
}

return  <div className="ImageItemOutline">
    <input
    className="ImageItem"
    type="file"
    id="file"
    onChange={addImageToTheCanvas}
    />
</div>

}

export default ImageItem;