import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import "./JsonOutputArea.css";
import { useSelector } from "react-redux";

function JsonOutputArea(){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    useSelector((state) => state.elementsBar.lastRefreshTime);
   

    function getImageJsonType(element){
        const e = {
            type: element.type,
            id: element.id,
            top: element.top,
            angle: element.angle,
            left: element.left,
            strokeWidth: element.strokeWidth,
            strokeColor: element.stroke,
            height: element.height * element.scaleX,
            width: element.width * element.scaleY,
            zIndex: element.getZIndex(),
            opacity: element.opacity,
            imageUrl: "https://www.templatedesigner.com/attachments/ass233sdseq34"
        };
        return e;
    }

    function getGeometricJsonType(element){
        const e = {
            type: element.type,
            id: element.id,
            top: element.top,
            angle: element.angle,
            left: element.left,
            height: element.height,
            width: element.width,
            radius: element.radius,
            zIndex: element.getZIndex(),
            color: element.fill,
            strokeWidth: element.strokeWidth,
            strokeColor: element.stroke,
            opacity: element.opacity,
        };
        return e;
    }

    function getTextJsonType(element){
        const e = {
            type: element.type,
            id: element.id,
            text: element.text ,
            fontSize: element.fontSize,
            top: element.top,
            angle: element.angle,
            left: element.left,
            height: element.height,
            width: element.width,
            zIndex: element.getZIndex(),
            color: element.fill,
            opacity: element.opacity,
        };
        return e;
    }




    // function getJsonOfElementsTree(){
    //     let currentOutput = "";
    //     let jsonElementList = [];
    //     for(let i = 0; i<allElements.length; i++){
    //         let element;
    //         if(allElements[i].id.includes("Image")){
    //          element = getImageJsonType(allElements[i]);
    //         }else if(allElements[i].id.includes("Text")){
    //             element = getTextJsonType(allElements[i], true);
    //         }
    //         else{
    //          element = getGeometricJsonType(allElements[i]);
    //         }
           
    //         jsonElementList.push(element);
    //     }
    //     // if(currentOutput){
    //     //     currentOutput += ",";
    //     // }
    //     currentOutput = addTemplateConfigToOutput(jsonElementList);
    //     currentOutput = formatOutput(currentOutput);
    //    return currentOutput;
    // }
    function getJsonOfElementsTree(){
        var functions = new CanvasFunctions();
        
        let jsonElementList = functions.getLayersData(allElements);
        let currentOutput = addTemplateConfigToOutput(jsonElementList);
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
    return currentOutput;
}