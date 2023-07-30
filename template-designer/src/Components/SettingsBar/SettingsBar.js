import { useSelector } from "react-redux";
import ColorItem from "../SettingsItems/ColorItem/ColorItem";
import DepthItem from "../SettingsItems/DepthItem/DepthItem";
import "./SettingsBar.css";

function SettingsBar(){
    const currentElement = useSelector((state) => state.elementsBar.currentElement);
    console.log("Chahsha");
    return <div className="SettingsBar">
    {currentElement && <ColorItem  currentElement= {currentElement}/>}
     {currentElement && <DepthItem currentElement= {currentElement}/>}
    </div>;
}

export default SettingsBar;