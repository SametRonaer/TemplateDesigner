import { useSelector } from "react-redux";
import ColorItem from "../SettingsItems/ColorItem/ColorItem";
import DepthItem from "../SettingsItems/DepthItem/DepthItem";
import "./SettingsBar.css";
import BorderWidthItem from "../SettingsItems/BorderWidthItem/BorderWidthItem";
import OpacityItem from "../SettingsItems/OpacityItem/OpacityItem";
import BorderColorItem from "../SettingsItems/BorderColorItem/BorderColorItem";
import CanvasColorItem from "../SettingsItems/CanvasColorItem/CanvasColorItem";
import TextItem from "../SettingsItems/TextItem/TextItem";
import TextSizeItem from "../SettingsItems/TextSizeItem/TextSizeItem";

function SettingsBar(){
    const currentElement = useSelector((state) => state.elementsBar.currentElement);
    const isText = (currentElement && currentElement.id.includes("Text"))
    const isBordered = (currentElement && currentElement.id.includes("Border"))
    return <div className="SettingsBar">
    <CanvasColorItem/>
    {currentElement && <ColorItem  currentElement= {currentElement}/>}
     {currentElement && <DepthItem currentElement= {currentElement}/>}
     {currentElement && <OpacityItem currentElement= {currentElement}/>}
     {isBordered && <BorderColorItem currentElement= {currentElement}/>}
     {/* {currentElement && <BorderWidthItem currentElement= {currentElement}/>} */}
     {isText && <TextItem currentElement= {currentElement}/>}
     {isText && <TextSizeItem currentElement= {currentElement}/>}
    </div>;
}

export default SettingsBar;