import { useDispatch } from "react-redux";
import { elementsList, jsonOutput } from "../../../../Constants/appConstants";
import "./ElementsBarTopAreaButton.css";

import { LuFileJson } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import { layoutActions } from "../../../../store/layout-store";

function ElementsBarTopAreaButton(props){
    const mode = props.mode;
    const dispatch = useDispatch();
    let modeIcon;

   function onClickHandler(){
       dispatch(layoutActions.setCurrentElementsBarMode(mode));    
   }
    
    function setModeConfig(){
        if(mode == elementsList){
            modeIcon = <BsListUl size={20} />
        }else if(mode == jsonOutput){
            modeIcon = <LuFileJson size={20} />
        }
    }

    setModeConfig();


    return <div className="ElementsBarTopAreaButton" onClick={onClickHandler}>
        {modeIcon}
    </div>;
}

export default ElementsBarTopAreaButton;
