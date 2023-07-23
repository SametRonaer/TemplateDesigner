import { useEffect } from "react";
import ElementTile from "../ElementTile/ElementTile";
import "./ElementsBar.css";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import { useSelector } from "react-redux";

function ElementsBar(props){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    
    
    function getTiles(){
        console.log("Here happen1");
     const tiles = allElements.map(e => <ElementTile element = {e} key= {e.id}/>);
     console.log("Here happen");
     console.log(allElements);
     return tiles;
    }

    const elementTiles = getTiles();

    return <div className="ElementsBar">
      {elementTiles}
    </div>;
}

export default ElementsBar;