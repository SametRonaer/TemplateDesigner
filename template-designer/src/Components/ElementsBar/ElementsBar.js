import "./ElementsBar.css";
import { useSelector } from "react-redux";
import ElementsBarTopArea from "./ElementsBarTopArea/ElementsBarTopArea";
import ElementTile from "./ElementTile/ElementTile";
import { elementsList, base64JsonOutput, parametricJsonOutput } from "../../Constants/appConstants";
import Base64JsonOutputArea from "../Base64JsonOutputArea/Base64JsonOutputArea";
import ParametricJsonOutputArea from "../ParametricJsonOutputArea/ParametricJsonOutputArea";

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
      }else if(currentMode === base64JsonOutput){
        currentModeComponent = <Base64JsonOutputArea/>
      }else if(currentMode === parametricJsonOutput){
        currentModeComponent = <ParametricJsonOutputArea/>
      }
    }

    setCurrentMode();

    return <div className="ElementsBar">
      <ElementsBarTopArea/>
      {currentModeComponent}
    </div>;
}

export default ElementsBar;