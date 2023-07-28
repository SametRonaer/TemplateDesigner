import CanvasFunctions from "../../../HelperFunctions/CanvasFunctions";
import "./ElementTile.css";

function ElementTile(props){

   function onClickHandler(){
        const canvasFunctions = new CanvasFunctions();
        canvasFunctions.setObjectActive(props.element.id);
    }

    return <div className="ElementTile" onClick={onClickHandler}>
        {props.element.name}
    </div>;
}

export default ElementTile;