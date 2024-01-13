import { base64JsonOutput, elementsList,  parametricJsonOutput } from "../../../Constants/appConstants";
import ElementsBarTopAreaButton from "./ElemenBarTopAreaButton/ElementsBarTopAreaButton";
import "./ElementsBarTopArea.css";

function ElementsBarTopArea(){
    return <div className="ElementsBarTopArea">
        <ElementsBarTopAreaButton mode = {elementsList}/>
        <ElementsBarTopAreaButton mode = {base64JsonOutput}/>
        <ElementsBarTopAreaButton mode = {parametricJsonOutput}/>
        <ElementsBarTopAreaButton mode = "renderJson"/>
    </div>;
}

export default ElementsBarTopArea;