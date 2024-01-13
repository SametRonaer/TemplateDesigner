import { elementsBarActions } from "../store/elements-bar-store";

export default class CanvasEventsManager{
    
    constructor(canvas, disp){
        if(CanvasEventsManager.instance){
            return CanvasEventsManager.instance;
        }
        this.appCanvas = canvas;
        this.dispatch = disp;
        CanvasEventsManager.instance = this;
        this.setEventFunctions();
        disp("Moo");
        return CanvasEventsManager.instance;
    }

    setAddedElement(obj){
        
       }

    setEventFunctions(){
        this.appCanvas.on({
            'object:added': this.setAddedElement,
          });
    }


}