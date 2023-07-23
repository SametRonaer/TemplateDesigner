import "./CanvasComponent.css";
import { fabric } from "fabric";
import { useEffect, useState} from "react";
import CanvasFunctions from "../../HelperFunctions/CanvasFunctions";
import { useDispatch, useSelector } from "react-redux";


function CanvasComponent(props){
      useEffect(() => { drawShape()}, []);
 
      const dispatch = useDispatch();
      // const[refresh, setRefresh] = useState(null);
 
       let canvasFunctions ;
      // const canvas = canvasFunctions.appCanvas;
      
      var canvas;
      var moveHandler = function (evt) {
          // var movingObject = evt.target;
          // console.log(movingObject);
          // console.log(movingObject.get('left'), movingObject.get('top'));
          // console.log(canvas.getObjects());
        };

        var clickHandler = function (evt){
          // var movingObject = evt.target;
          // console.log(movingObject);
          //getAllElements(canvas);
          //getElementById(canvas, "MyAwesomeId");
         // addSolidRect(canvas);
         //setRefresh(Date.now());
         //canvasFunctions.getAllElements();
         //canvasFunctions.addSolidRect();
        
        }
        
        function drawShape(){

          canvas = new fabric.Canvas("canvas", { preserveObjectStacking: true });
          
        
        canvasFunctions  = new CanvasFunctions(canvas, dispatch);
        
          canvas.on('object:moving', moveHandler);
          canvas.on('mouse:down', clickHandler);
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
        
            
          canvasFunctions.addSolidRect("blue");
        //  canvasFunctions.getAllElements();
             
      }
// console.log("Refereshed");
// console.log(refresh);
    return <div className="CanvasComponent"> 
       <canvas id="canvas" width="322" height="700"></canvas>
    </div>;

  

   
}

export default CanvasComponent;






// function onClickHandler(e){
//     console.log(e);
//     var rect = e.target.getBoundingClientRect();
//     var x = e.clientX - rect.left; //x position within the element.
//     var y = e.clientY - rect.top;  //y position within the element.
//     console.log("Left? : " + x + " ; Top? : " + y + ".");
// }