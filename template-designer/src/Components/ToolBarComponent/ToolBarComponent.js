import { useState } from "react";
import { alphaImage, circle, image, rectangle, solidCircle, solidRectangle, text } from "../../Constants/appConstants";
import ToolBarItem from "../ToolBarItem/ToolBarItem";
import "./ToolBarComponent.css";
import { PiRectangleFill, PiTextAa } from "react-icons/pi";

function ToolBarComponent(){
    
    const solidRectIcon = <PiRectangleFill size={30} color="green"/>
    const textIcon = <PiTextAa size={26}  />
    const imageIcon = <PiTextAa size={26} />

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