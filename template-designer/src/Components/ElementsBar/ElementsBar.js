import "./ElementsBar.css";
import { useSelector } from "react-redux";
import ElementsBarTopArea from "./ElementsBarTopArea/ElementsBarTopArea";
import ElementTile from "./ElementTile/ElementTile";
import { elementsList, jsonOutput } from "../../Constants/appConstants";
import JsonOutputArea from "../JsonOutputArea/JsonOutputArea";

function ElementsBar(props){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    const currentMode  = useSelector((state) => state.layout.currentElementsBarMode);
    
    
    
    function getTiles(){
     const tiles = allElements.map(e => <ElementTile element = {e} key= {e.id}/>);
     return tiles;
    }

    let currentModeComponent;

    
    function setCurrentMode(){
      if(currentMode === elementsList){
        currentModeComponent = getTiles();
      }else if(currentMode === jsonOutput){
        currentModeComponent = <JsonOutputArea/>
      }
    }

    setCurrentMode();

    return <div className="ElementsBar">
      <ElementsBarTopArea/>
      {currentModeComponent}
    </div>;
}

export default ElementsBar;