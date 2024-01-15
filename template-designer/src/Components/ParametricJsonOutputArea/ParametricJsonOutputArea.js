import { useSelector } from "react-redux";
import "./ParametricJsonOutputArea.css";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import { useState } from "react";


var generatedParametricJsonOutput;

export function getGeneratedParametricJsonOutput(){
    return generatedParametricJsonOutput;
}


function ParametricJsonOutputArea(){
    const allElements = useSelector((state) => state.elementsBar.allElements);
    useSelector((state) => state.elementsBar.lastRefreshTime);
    let imageIndexes = [];
    let jsonElementList = [];
      function getJsonOfElementsTree(){
        let currentOutput = "";
        jsonElementList = [];
        for(let i = 0; i<allElements.length; i++){
            let element;
            if(allElements[i].id.includes("Image")){
             element = getImageJsonType(allElements[i]);
             imageIndexes.push(i);
            }else if(allElements[i].id.includes("Text")){
                element = getTextJsonType(allElements[i], true);
            }
            else{
             element = getGeometricJsonType(allElements[i]);
            }
           
            jsonElementList.push(element);
        }
        if(currentOutput){
            currentOutput += ",";
        }
        currentOutput = addTemplateConfigToOutput(jsonElementList);
        currentOutput = formatOutput(currentOutput);
        generatedParametricJsonOutput = currentOutput
        setImagesBase64Data();
       return currentOutput;
    }


    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
    

    function formatOutput(currentOutput){
        currentOutput = currentOutput.replaceAll("{", "{ \n");
        currentOutput = currentOutput.replaceAll("[", "[ \n");
        currentOutput = currentOutput.replaceAll("]", "] \n");
        currentOutput = currentOutput.replaceAll(",", ", \n");
        return currentOutput;
    }
    
    function addTemplateConfigToOutput(currentOutput){
        const functions = new CanvasFunctions();
        
       const templateConfig = {
        version: 0.01,
        backgroundColor: functions.appCanvas.backgroundColor,
        canvasHeight: 760,
        canvasWidth: 351,
        tree: currentOutput
       };
       return JSON.stringify(templateConfig);
    }


    function setImagesBase64Data(){
        for(let i = 0; i<imageIndexes.length; i++){
            let element = allElements[imageIndexes[i]]
            var value = element.id.split("/*/blob:")[1]
            console.log("Value isjj");
            console.log(value);
            var base64data;
            fetch(value)
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
            // Here's where you get access to the blob
            // And you can use it for whatever you want
            // Like calling ref().put(blob)
            console.log("Blob is");
            console.log(blob);
            
            var reader = new FileReader();
            reader.readAsDataURL(blob); 
            reader.onloadend = function() {
             base64data = reader.result;                
            console.log(base64data);
            jsonElementList[imageIndexes[i]]["imageBase64"] = base64data 
            let currentOutput = addTemplateConfigToOutput(jsonElementList);
            currentOutput = formatOutput(currentOutput);
            generatedParametricJsonOutput = currentOutput;
        }});
        }
      
    }

    function getImageJsonType(element){

        
        var value = element.id.split("/*/blob:")[1]
        console.log("Value is");
        console.log(element);
        console.log(value);
        var base64data;
        fetch(value)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)
        console.log("Blob is");
        console.log(blob);
        
        var reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
         base64data = reader.result;                
        console.log(base64data);
    }});

    console.log("Scale is");
    //console.log(element.);

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
            scaleHeight: element.scaleToHeight,
            scaleWidth: element.scaleToWidth,
            imageUrl:base64data
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
            height: element.height * element.scaleX,
            width: element.width * element.scaleY,
            radius: element.radius,
            zIndex: element.getZIndex(),
            color: element.fill,
            strokeWidth: element.strokeWidth,
            strokeColor: element.strokeColor,
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
    
    const currentElementsTree = getJsonOfElementsTree();

    return <div className = "ParametricJsonOutputArea" >
        {currentElementsTree}
 </div>;
}


export default ParametricJsonOutputArea;