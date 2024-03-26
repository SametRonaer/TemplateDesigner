import { useDispatch } from "react-redux";
import { getGeneratedParametricJsonOutput } from "../ParametricJsonOutputArea/ParametricJsonOutputArea"
import "./SaveButton.css"
import { base64JsonOutput, parametricJsonOutput } from "../../Constants/appConstants";
import { layoutActions } from "../../store/layout-store";
import { getBase64Output } from "../Base64JsonOutputArea/Base64JsonOutputArea";
import { sendJsonTemplate } from "../../Services/apiService";
import { useState } from "react";



function SaveButton(props){
    const dispatch = useDispatch();
   const [buttonState, setButtonState] = useState(false);
    var designCode;

    if(props.designCode){
        designCode = props.designCode;
    }

    return designCode ? <div className= {!buttonState ? "SaveButton" : "SaveButtonOff"}  onClick={onClicHandler}>
        Save
    </div> : <div></div>

    function onClicHandler(){
        if(buttonState){
            return;
        }
        setButtonState(true);
        setTimeout(getParametricJson, 500);
    }

    function getParametricJson(){
        dispatch(layoutActions.setCurrentElementsBarMode(parametricJsonOutput));    
        setTimeout(getBase64Json, 200);
    }

    function getBase64Json(){
        dispatch(layoutActions.setCurrentElementsBarMode(base64JsonOutput));    
        setTimeout(save, 200);
    }

    function save(){
        var webDesignJson = getGeneratedParametricJsonOutput();
        var mobileDesignJson = getBase64Output();
        sendJsonTemplate(webDesignJson, mobileDesignJson, designCode, onFinished);
    }

    function onFinished(){
        console.log("Finished");
        setButtonState(false);
    }

}


export default SaveButton