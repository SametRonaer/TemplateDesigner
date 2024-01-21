import { useDispatch } from "react-redux";
import { generatedParametricJsonOutput, getGeneratedParametricJsonOutput } from "../ParametricJsonOutputArea/ParametricJsonOutputArea"
import "./SaveButton.css"
import { base64JsonOutput, parametricJsonOutput } from "../../Constants/appConstants";
import { layoutActions } from "../../store/layout-store";
import { getBase64Output } from "../Base64JsonOutputArea/Base64JsonOutputArea";
import { getJsonTemplate, sendJsonTemplate } from "../../Services/apiService";


function SaveButton(props){
    const dispatch = useDispatch();

    var designCode;

    if(props.designCode){
        designCode = props.designCode;
    }

    return designCode ? <div className="SaveButton"  onClick={onClicHandler}>
        Save
    </div> : <div></div>

    function onClicHandler(){
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
        sendJsonTemplate(webDesignJson, mobileDesignJson, designCode);
    }


}


export default SaveButton