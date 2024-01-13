import { fabric } from "fabric";
import { elementsBarActions } from "../store/elements-bar-store";
import myImage from "../Assets/myImage.png";



fabric.Object.prototype.getZIndex = function() {
    return this.canvas.getObjects().indexOf(this);
}



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
        this.dispatch(elementsBarActions.setAllElements( objects));
        return objects;
    }
    getActiveElement(){
        const object =  this.appCanvas.getActiveObject();
        return object;
    }

   getElementById(id){
        let objects = this.appCanvas.getObjects();
        let object;
        objects.forEach((o) => {
            if(o.id === id){
                object = o;
            }
        });
        return object;
    }
  
    
// Add functions

    

    addSolidRect(color, previous){
        if(previous){
            this.appCanvas.add(previous);
            this.getAllElements();
            return;
        }
        var rect = new fabric.Rect({
            top : 0,
            left : 0,
            width : 50,
            height : 50,
            fill : color ?? '#f4f5ff',
        });
        
        
        rect.id = `SolidRect${Date.now()}`;
        rect.name = "Rect";
        this.appCanvas.add(rect);
       this.getAllElements();
    }
    addBorderedRect(color, previous){
        if(previous){
            this.appCanvas.add(previous);
            this.getAllElements();
            return;
        }
        var rect = new fabric.Rect({
            top : 0,
            left : 0,
            width : 50,
            height : 50,
            strokeWidth: 2,
            stroke: "#000000",
            fill:  '#ff55ff00',
        });
        rect.id = `BorderedRect${Date.now()}`;
        rect.name = "Rect";
        this.appCanvas.add(rect);
       this.getAllElements();
    }
  
    addSolidCircle(color, previous){
        if(previous){
            this.appCanvas.add(previous);
            this.getAllElements();
            return;
        }
        var circle = new fabric.Circle({
            top : 0,
            left : 0,
            radius: 50,
            fill: '#f4f5ff',
        });
        circle.id = `SolidCircle${Date.now()}`;
        circle.name = "Circle";
        this.appCanvas.add(circle);
        this.getAllElements();
    }
    addBorderedCircle(color,previous){
        if(previous){
            this.appCanvas.add(previous);
            this.getAllElements();
            return;
        }
        var circle = new fabric.Circle({
            top : 0,
            left : 0,
            radius: 50,
            strokeWidth: 2,
            stroke: "#000000",
            fill:  '#ff55ff00',
        });
        circle.id = `BorderedCircle${Date.now()}`;
        circle.name = "Circle";
        this.appCanvas.add(circle);
        this.getAllElements();
    }
    
    addText(text, previous){
        if(previous){
            this.appCanvas.add(previous);
            this.getAllElements();
            return;
        }
        const innerCanvas = this.appCanvas;
        var myText = new fabric.Text(text, {
            //underline: true,
            //overline: true
            fill: "#000000"
            
        });
        myText.id = `Text${Date.now()}`;
        myText.name = "Text";
        
        innerCanvas.add(myText);
        this.getAllElements();
    }
    
    addImage(e, previous){
        const outerThis = this;
        if(previous){
           // const imageUrl = URL.createObjectURL(previous);
           // console.log("Image url is");
           // console.log(imageUrl);
            fabric.Image.fromURL(previous, function(img){
                img.id = `DesignImage${Date.now()}/*/`;
                img.name = "Image";
                
                img.scaleToWidth(300);
                outerThis.appCanvas.add(img);
                outerThis.getAllElements();
            });
            return
        }

        console.log("The image is");
        console.log(e.target.files[0]);
        const imageUrl = URL.createObjectURL(e.target.files[0]);
   
        fabric.Image.fromURL(imageUrl, function(img){
            img.id = `DesignImage${Date.now()}/*/${imageUrl}`;
            img.name = "Image";

            let myImage = img.toDataURL();
            console.log("My ımage isTTT");
            console.log(myImage);

            img.scaleToWidth(300);
            outerThis.appCanvas.add(img);
            outerThis.getAllElements();
        });

    }


    
    addAlphaImage(e, previous){
        const outerThis = this;
        fabric.Image.fromURL(myImage, function(img){
            img.id = `AlphaImage${Date.now()}`;
            img.name = "AlphaImage";
            img.scaleToWidth(300);
            outerThis.appCanvas.add(img);
            outerThis.getAllElements();
        });
        //const outerReference = this;
        // fabric.Image.fromURL("https://img.freepik.com/premium-photo/woman-holding-barbell-shoulders-gym_651396-1604.jpg", function(img){
        //     img.id = `AlphaImage${Date.now()}`;
        //     img.name = "AlphaImage";
        //     img.scaleToWidth(300);
        //     outerReference.appCanvas.add(img);
        //     outerReference.getAllElements();
        // });

    }

    


    // Set functions

    setObjectActive(id){
        const selectedObj = this.getElementById(id);
        this.appCanvas.setActiveObject(selectedObj);
        this.appCanvas.requestRenderAll()
        //selectedObj.set('active',true); 
        //this.appCanvas.setActiveObject(selectedObj);
    }

    renderAll(){
        this.appCanvas.renderAll();
    }


    setZIndex(index, givenElement){
        let element ;
        if(givenElement){
            element = givenElement;
        }else{
            element = this.getActiveElement();
        }
        if(element){
            this.appCanvas.moveTo(element, index);
        }
    }
    setOpacity(value){
        const element = this.getActiveElement();
        if(element){
            element.set({
                opacity:value
            });
        }
        this.renderAll();
    }
    setText(value){
        const element = this.getActiveElement();
        if(element){
            element.set({
                text: value
            });
        }
        this.renderAll();
    }
    setTextSize(value){
        const element = this.getActiveElement();
        if(element){
            element.set({
                fontSize: value
            });
        }
        this.renderAll();
    }



    setCanvasColor(color){
       this.appCanvas.backgroundColor = color;
        this.renderAll()
    }
    setBodyColor(color){
        const element = this.getActiveElement();
        if(element){
            element.set({
                fill:color
            });
        }
        this.renderAll()
    }
    setBorderColor(color){
        const element = this.getActiveElement();
        if(element){
            element.set({
                stroke: color,
            });
        }
        this.renderAll()
    }


    //TODO fix bug to use here
    setBorderWidth(width){
        const element = this.getActiveElement();
        if(element){
            element.set({
                strokeWidth: width,
                
              });
        this.appCanvas.add(element);
              this.renderAll()
        }
        
    }






   
    getLayersData(elements){
        var layerElements = elements;
        var layerDepthOrders = {};
        let thumbnailImage =  this.appCanvas.toDataURL({
            width: this.appCanvas.width,
            height: this.appCanvas.height,
            left: 0,
            top: 0,
            format: 'png',
        });
        thumbnailImage = thumbnailImage.split(';base64,')[1];
        
        elements.forEach((element) => {
            layerDepthOrders[element.id] = element.getZIndex();
           
        });
        elements.forEach((element) => {
            this.appCanvas.remove(element);
        });

        let layers = [];
        let images = [];
        const currentCanvasColor = this.appCanvas.backgroundColor;
        this.appCanvas.backgroundColor = "#00000000";
        
        layerElements.forEach((element) => {
            var newElement = element;
            this.appCanvas.add(newElement);
            if(newElement.id.includes("Alpha")){
                this.getAlphaImageData(element, images, layerDepthOrders[element.id]);
            }else{
                let dataURL = this.appCanvas.toDataURL({
                    width: this.appCanvas.width,
                    height: this.appCanvas.height,
                    left: 0,
                    top: 0,
                    format: 'png',
                });
                dataURL = dataURL.split(';base64,')[1];
                const elementId = element.id;
             
                const result = {
                    id: elementId,
                    depth: layerDepthOrders[element.id],
                    layerData: dataURL,
                }
                layers.push(result);
            }
            this.appCanvas.remove(newElement);
            // const link = document.createElement('a');
            // link.download = 'image.png';
            // link.href = dataURL;
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
            // this.appCanvas.remove(newElement);
        });      
        this.appCanvas.backgroundColor = currentCanvasColor;
        layerElements.forEach((element) => {
         
            this.appCanvas.add(element);
        });
        
        layerElements.forEach((element) => {
            this.setZIndex( layerDepthOrders[element.id], element);
        });

        return [layers, images, thumbnailImage];
        
    }

    // delay(time) {
    //     return new Promise(resolve => setTimeout(resolve, time));
    //   }
      

    async getAlphaImageData(element, images, zIndex){
        // let oldAngle = element.angle;
        // let oldTop = element.top;
       
        // element.set({
        //     angle: 0,
        // });
        // this.renderAll();
        // //await this.delay(5000);
        // let newElement = this.getElementById(element.id);
        // console.log(`After angle ${newElement.angle}`);
        // console.log(`After top ${newElement.top}`);
        // //await this.delay(5000);
        // // element.set({
        // //     angle: oldAngle,
        // // });
        // this.renderAll();
        const imageData = {
            id: element.id,
            top: element.top,
            angle: element.angle,
            left: element.left,
            strokeWidth: element.strokeWidth,
            strokeColor: element.stroke,
            height: element.height * element.scaleX,
            width: element.width * element.scaleY,
            depth: zIndex,
            opacity: element.opacity,
        }
        images.push(imageData);
    }


    //Remove functions
    removeActiveElement(){
        const element = this.getActiveElement();
        if(element){
            this.appCanvas.remove(element);
            this.renderAll();
            this.getAllElements();
        }
        
    }
}

