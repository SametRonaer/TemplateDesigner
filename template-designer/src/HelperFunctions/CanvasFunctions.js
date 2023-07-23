import { fabric } from "fabric";
import { elementsBarActions } from "../store/elements-bar-store";



export default class CanvasFunctions{
    
    constructor(canvas, disp){
        if(CanvasFunctions.instance){
            return CanvasFunctions.instance;
        }
        this.appCanvas = canvas;
        this.dispatch = disp;
        CanvasFunctions.instance = this;
        return CanvasFunctions.instance;
    }

  
  // Get functions

    getAllElements(){
        let objects =  this.appCanvas.getObjects();
        console.log(objects);
        this.dispatch(elementsBarActions.setAllElements( objects));
        return objects;
    }

   getElementById(id){
        let objects = this.appCanvas.getObjects();
        let object;
        objects.forEach((o) => {
            if(o.id == id){
                object = o;
            }
        });
        console.log(object);
        return object;
    }
    
// Add functions

    addSolidRect(color){
        var rect = new fabric.Rect({
            top : 0,
            left : 0,
            width : 50,
            height : 50,
            fill : color ?? 'pink'
        });
        rect.id = `MyRect${Date.now()}`;
        rect.name = "Rect";
        this.appCanvas.add(rect);
        console.log(rect);
        this.getAllElements();
    }
  
    addSolidCircle(color){
        var circle = new fabric.Circle({
            top : 0,
            left : 0,
            width : 50,
            height : 50,
            fill : color ?? 'yellow'
        });
        circle.id = `MyCircle${Date.now}`;
        circle.name = "Circle";
        this.appCanvas.add(circle);
        console.log(circle);
        this.getAllElements();
    }
    
    addText(text){
        var myText = new fabric.Text(text, {
            underline: true,
            overline: true
        });
        myText.id = `MyText${Date.now}`;
        myText.name = "Text";
        this.appCanvas.add(myText);
        console.log(myText);
        this.getAllElements();
    }


    // Set functions

    setObjectActive(id){
        const selectedObj = this.getElementById(id);
        this.appCanvas.setActiveObject(selectedObj);
        this.appCanvas.requestRenderAll()
        //selectedObj.set('active',true); 
        //this.appCanvas.setActiveObject(selectedObj);
    }


    setZIndex(id, index){
        //canvas.moveTo(rect, -2);
    }

}
