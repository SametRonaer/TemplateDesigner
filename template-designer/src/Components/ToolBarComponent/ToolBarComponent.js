import { alphaImage, circle, image, rectangle, solidCircle, solidRectangle, text } from "../../Constants/appConstants";
import ToolBarItem from "../ToolBarItem/ToolBarItem";
import "./ToolBarComponent.css";
import { BiSolidRectangle, BiRectangle, BiCircle, BiSolidCircle, BiText} from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
function ToolBarComponent(){
    const iconColor = "grey";
    const iconSize = 22;
    const solidRectIcon = <BiSolidRectangle size={iconSize} color= {iconColor} />
    const rectIcon = <BiRectangle size={iconSize} color= {iconColor} />
    const circleIcon = <BiCircle size={iconSize} color= {iconColor} />
    const solidCircleIcon = <BiSolidCircle size={iconSize} color= {iconColor} />
    const textIcon = <BiText size={iconSize} color= {iconColor} />
    const imageIcon = <BsCamera size={iconSize} color= {iconColor}/>

    return <div className="ToolBarComponent">
        <ToolBarItem item = {rectangle} icon = {rectIcon} />
        <ToolBarItem item = {solidRectangle} icon ={solidRectIcon}/>
        <ToolBarItem item = {circle} icon ={circleIcon}/>
        <ToolBarItem item = {solidCircle} icon ={solidCircleIcon}/>
        <ToolBarItem item = {image} icon = {imageIcon}/>
        <ToolBarItem item = {alphaImage} icon = {imageIcon}/>
        <ToolBarItem item = {text} icon = {textIcon}/>
       
    </div>;
}

export default ToolBarComponent;