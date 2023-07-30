import "./CanvasComponent.css";
import { fabric } from "fabric";
import { useEffect, useState} from "react";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import { useDispatch, useSelector } from "react-redux";
import { elementsBarActions } from "../../store/elements-bar-store";
import CanvasEventsManager from "../../HelperFunctions/CanvasEventsManager";


function CanvasComponent(props){
      useEffect(() => { drawShape()}, []);
 
      const dispatch = useDispatch();
      // const[refresh, setRefresh] = useState(null);
 
    function setDispatch(action){
     // dispatch(action);
    }

    function moveHandler(){
      dispatch(elementsBarActions.setLastRefreshTime(Date.now()));
    }

       let canvasFunctions ;
      // const canvas = canvasFunctions.appCanvas;
      
      var canvas;
     
        
        function drawShape(){

          canvas = new fabric.Canvas("canvas", { preserveObjectStacking: true });
          
        //  let evenstManager = new CanvasEventsManager(canvas, setDispatch);
        canvasFunctions  = new CanvasFunctions(canvas, dispatch);
        
        canvas.on("object:scaling", function (e) {
          var target = e.target;
          if (!target || target.type !== 'rect') {
              return;
          }
          var sX = target.scaleX;
          var sY = target.scaleY;
          let cord = target.getCoords();
          console.log(cord);
          target.width *= sX;
          target.height *= sY;
          target.scaleX = 1;
          target.scaleY = 1;
          target.dirty = true;
      });

         canvas.on('object:moving', moveHandler);
          // canvas.on('mouse:down', clickHandler);
          canvas.on('mouse:wheel', function(opt) {
            var delta = opt.e.deltaY;
            var zoom = canvas.getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
          });
        
     
          canvas.on({
            'selection:updated': setSelectedElement,
            'selection:created': setSelectedElement
          });
          canvas.on({
            'object:added': setAddedElement,
          });
          
          function setSelectedElement(obj){
            dispatch(elementsBarActions.setCurrentElement(obj.selected[0]));
            console.log("Selection is");
            console.log(obj);
          }
          function setAddedElement(obj){
           dispatch(elementsBarActions.setCurrentElement(obj.target));
            console.log("Selection is");
            console.log(obj);
          }

          canvasFunctions.addSolidRect("#cd1d1d");
     
             
      }
    return <div className="CanvasComponent"> 
       <canvas id="canvas" width="322" height="700"></canvas>
    </div>;

  

   
}

export default CanvasComponent;






