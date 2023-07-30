import "./JsonOutputArea.css";
import { useSelector } from "react-redux";

function JsonOutputArea(){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    useSelector((state) => state.elementsBar.lastRefreshTime);
   

    function getJsonOfElementsTree(){
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
                imageUrl: "https://www.templatedesigner.com/attachments/ass233sdseq34"
            };
            jsonElementList.push(element);
        }
        // if(currentOutput){
        //     currentOutput += ",";
        // }
        currentOutput = addTemplateConfigToOutput(jsonElementList);
        currentOutput = formatOutput(currentOutput);
       return currentOutput;
    }

   const output = getJsonOfElementsTree();

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