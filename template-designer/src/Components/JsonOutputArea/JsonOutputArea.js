import { useState } from "react";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import "./JsonOutputArea.css";
import { elementsList } from "../../Constants/appConstants";

function JsonOutputArea(){
    const[output, setOutput] = useState("");

    function getJsonOfElementsTree(){
        const functions = new CanvasFunctions();
        const allElements = functions.getAllElements();
        let currentOutput = "";
        let jsonElementList = [];
        for(let i = 0; i<allElements.length; i++){
            const element = {
                type: allElements[i].type,
                top: allElements[i].top,
                left: allElements[i].left,
                height: allElements[i].height,
                width: allElements[i].width,
                zIndex: allElements[i].getZIndex(),
                color: allElements[i].fill,
            };
            jsonElementList.push(element);
        }
        // if(currentOutput){
        //     currentOutput += ",";
        // }
        currentOutput = addTemplateConfigToOutput(jsonElementList);
        currentOutput = formatOutput(currentOutput);
        setOutput(currentOutput);
    }

    return <div className = "JsonOutputArea" onClick={getJsonOfElementsTree}>
       {output}
    </div>;
}

export default JsonOutputArea;


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function addTemplateConfigToOutput(currentOutput){
   const templateConfig = {
    version: 0.01,
    elements: currentOutput
   };
   return JSON.stringify(templateConfig);
}

function formatOutput(currentOutput){
    currentOutput = currentOutput.replaceAll("{", "{ \n");
    currentOutput = currentOutput.replaceAll("[", "[ \n");
    currentOutput = currentOutput.replaceAll("]", "] \n");
    currentOutput = currentOutput.replaceAll(",", ", \n");
    return currentOutput;
}