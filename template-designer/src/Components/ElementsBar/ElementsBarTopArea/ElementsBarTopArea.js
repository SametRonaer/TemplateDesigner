import { elementsList, jsonOutput } from "../../../Constants/appConstants";
import ElementsBarTopAreaButton from "./ElemenBarTopAreaButton/ElementsBarTopAreaButton";
import "./ElementsBarTopArea.css";

function ElementsBarTopArea(){
    return <div className="ElementsBarTopArea">
        <ElementsBarTopAreaButton mode = {elementsList}/>
        <ElementsBarTopAreaButton mode = {jsonOutput}/>
    </div>;
}

export default ElementsBarTopArea;