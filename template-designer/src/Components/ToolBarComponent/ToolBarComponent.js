import { alphaImage, circle, image, rectangle, solidCircle, solidRectangle, text } from "../../Constants/appConstants";
import ToolBarItem from "../ToolBarItem/ToolBarItem";
import "./ToolBarComponent.css";

function ToolBarComponent(){
    return <div className="ToolBarComponent">
        <ToolBarItem item = {rectangle}/>
        <ToolBarItem item = {solidRectangle}/>
        <ToolBarItem item = {circle}/>
        <ToolBarItem item = {solidCircle}/>
        <ToolBarItem item = {image}/>
        <ToolBarItem item = {alphaImage}/>
        <ToolBarItem item = {text}/>
    </div>;
}

export default ToolBarComponent;