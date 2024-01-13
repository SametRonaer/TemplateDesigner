import "./CanvasComponent.css";
import { fabric } from "fabric";
import { useEffect, useState} from "react";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import { useDispatch, useSelector } from "react-redux";
import { elementsBarActions } from "../../store/elements-bar-store";



function CanvasComponent(props){
      useEffect(() => { drawShape()}, []);
 
      const dispatch = useDispatch();
     
 
    function setDispatch(action){
     // dispatch(action);
    }

    function moveHandler(){
      dispatch(elementsBarActions.setLastRefreshTime(Date.now()));
    }
       let canvasFunctions ; 
       var canvas;
     
        
        function drawShape(){
          canvas = new fabric.Canvas("canvas", { preserveObjectStacking: true });
          
          
        canvas.backgroundColor =  "#ffffffff";
        canvasFunctions  = new CanvasFunctions(canvas, dispatch);
        canvasFunctions.renderAll();
        canvas.on("object:scaling", function (e) {
          dispatch(elementsBarActions.setLastRefreshTime(Date.now()));
          var target = e.target;
          
         if(!target.id.includes("Alpha")){
          return;
         }
          // var sX = target.scaleX;
          // var sY = target.scaleY;
          // target.set({
          //   radius: target.radius * sX,
          //   width : target.width * sX,
          //   height : target.height * sY,

          // });
          // target.scaleX = 1;
          // target.scaleY = 1;
          // target.dirty = true;
      });

      window.addEventListener(
        "keydown",
        (event) => {
          console.log(event);
          if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
          }
      
          let handled = false;
          if (event.key === 'Backspace') {
            canvasFunctions.removeActiveElement();
            handled = true;
          }
      
          if (handled) {
            // Suppress "double action" if event handled
            event.preventDefault();
          }
        },
        true,
      );

        

         canvas.on('object:moving', moveHandler);
          // canvas.on('mouse:down', clickHandler);
          // canvas.on('mouse:wheel', function(opt) {
          //   var delta = opt.e.deltaY;
          //   var zoom = canvas.getZoom();
          //   zoom *= 0.999 ** delta;
          //   if (zoom > 20) zoom = 20;
          //   if (zoom < 0.01) zoom = 0.01;
          //   canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
          //   opt.e.preventDefault();
          //   opt.e.stopPropagation();
          // });
        
     
          canvas.on({
            'selection:updated': setSelectedElement,
            'selection:created': setSelectedElement
          });
          canvas.on({
            'object:added': setAddedElement,
          });
          
          function setSelectedElement(obj){
            dispatch(elementsBarActions.setCurrentElement(obj.selected[0]));
            // console.log("Selection is");
            // console.log(obj);
          }
          function setAddedElement(obj){
           dispatch(elementsBarActions.setCurrentElement(obj.target));
            // console.log("Selection is");
            // console.log(obj);
          }

       
             
      }
    return <div className="CanvasComponent"> 
       <canvas id="canvas" width="351" height="760"></canvas>
    </div>;

  

   
}

export default CanvasComponent;






