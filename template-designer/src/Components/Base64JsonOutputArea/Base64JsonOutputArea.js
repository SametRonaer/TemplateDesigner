import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import "./Base64JsonOutputArea.css";
import { useSelector } from "react-redux";

var base64JsonOutput;

export function getBase64Output(){
    return base64JsonOutput;
}

function Base64JsonOutputArea(){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    useSelector((state) => state.elementsBar.lastRefreshTime);

    function getJsonOfElementsTree(){
        var functions = new CanvasFunctions();
        
        let jsonElementList = functions.getLayersData(allElements);
        let currentOutput = addTemplateConfigToOutput(jsonElementList);
        currentOutput = formatOutput(currentOutput);
       return currentOutput;
    }

   const output = getJsonOfElementsTree();

    return <div className = "Base64JsonOutputArea" onClick={getJsonOfElementsTree}>
       {output}
    </div>;
}

export default Base64JsonOutputArea;


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function addTemplateConfigToOutput(currentOutput){
    const functions = new CanvasFunctions();
    
   const templateConfig = {
    version: 0.01,
    backgroundColor: functions.appCanvas.backgroundColor,
    canvasHeight: 760,
    canvasWidth: 351,
    layers: currentOutput[0],
    images: currentOutput[1],
    thumbnail: currentOutput[2],
   };
   return JSON.stringify(templateConfig);
}

function formatOutput(currentOutput){
    currentOutput = currentOutput.replaceAll("{", "{ \n");
    currentOutput = currentOutput.replaceAll("[", "[ \n");
    currentOutput = currentOutput.replaceAll("]", "] \n");
    currentOutput = currentOutput.replaceAll(",", ", \n");
    base64JsonOutput = currentOutput;
    return currentOutput;
}