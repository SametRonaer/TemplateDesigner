import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import "./ToolBarItem.css";

function ToolBarItem(props){
    
    function addItem(){
        const functions = new CanvasFunctions();
        //functions.addSolidCircle();
        functions.addText("Haloo");
        //functions.addSolidRect("blue");
    }

    return <div className="ToolBarItem" onClick={addItem}>
        {props.item}
    </div>
}

export default ToolBarItem;