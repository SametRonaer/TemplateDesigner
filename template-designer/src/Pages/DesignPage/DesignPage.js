import CanvasComponent from "../../Components/CanvasComponent/CanvasComponent";
import ElementsBar from "../../Components/ElementsBar/ElementsBar";
import ToolBarComponent from "../../Components/ToolBarComponent/ToolBarComponent";
import TopBarComponent from "../../Components/TopBarComponent/TopBarComponent";
import "./DesignPage.css";


function DesignPage(){
    return <div className="DesignPage">
        <TopBarComponent/>
        <ToolBarComponent/>
        <CanvasComponent/>
        <ElementsBar/>
    </div>;
}

export default DesignPage;