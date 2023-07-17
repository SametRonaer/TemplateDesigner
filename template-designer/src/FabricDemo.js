import { fabric } from "fabric";
import { useEffect} from "react";
function FabricDemo(){

    useEffect(() => {
      drawShape();
    }, []);

    function drawShape(){
        var canvas = new fabric.Canvas('canvas');
        var rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        });

        canvas.add(rect);
    }

    return <div className= {"FabricDemo"}>
        Halo
        <canvas id="canvas" width="300" height="300"></canvas>
    </div>
}

export default FabricDemo;