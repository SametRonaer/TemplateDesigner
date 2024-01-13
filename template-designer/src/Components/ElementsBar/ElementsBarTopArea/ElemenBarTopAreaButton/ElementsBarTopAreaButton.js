import { useDispatch } from "react-redux";
import { base64JsonOutput, elementsList, parametricJsonOutput} from "../../../../Constants/appConstants";
import "./ElementsBarTopAreaButton.css";

import { LuCornerDownLeft, LuFileArchive, LuFileJson } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";

import { layoutActions } from "../../../../store/layout-store";
import { renderPreviousWork } from "../../../../HelperFunctions/CanvasRendererFromJson";

function ElementsBarTopAreaButton(props){
    const mode = props.mode;
    const dispatch = useDispatch();
    let modeIcon;
    const iconColor = "gray";
   function onClickHandler(){
    if(mode == "renderJson"){
        renderPreviousWork();
    }else{
        dispatch(layoutActions.setCurrentElementsBarMode(mode));    
    }
   }
    
    function setModeConfig(){
        if(mode == elementsList){
            modeIcon = <BsListUl size={20} color= {iconColor} />
        }else if(mode == base64JsonOutput){
            modeIcon = <LuFileJson size={20} color= {iconColor}/>
        }else if(mode == parametricJsonOutput){
            modeIcon = <LuFileArchive size={20} color= {iconColor}/>
        }
        else if(mode ==  "renderJson"){
            modeIcon = <LuCornerDownLeft size={20} color= {iconColor}/>
        }
    }

    setModeConfig();


    return <div className="ElementsBarTopAreaButton" onClick={onClickHandler}>
        {modeIcon}
    </div>;
}

export default ElementsBarTopAreaButton;
