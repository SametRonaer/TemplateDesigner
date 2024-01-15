import CanvasComponent from "../../Components/CanvasComponent/CanvasComponent";
import ElementsBar from "../../Components/ElementsBar/ElementsBar";
import ToolBarComponent from "../../Components/ToolBarComponent/ToolBarComponent";
import TopBarComponent from "../../Components/TopBarComponent/TopBarComponent";
import { getJsonTemplate } from "../../Services/apiService";
import "./DesignPage.css";
import {useSearchParams } from 'react-router-dom';

function DesignPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get("myKey");
    console.log(query)
    getJsonTemplate("530068");

    return <div className="DesignPage">
        <TopBarComponent/>
        <ToolBarComponent/>
        <CanvasComponent/>
        <ElementsBar/>
    </div>;
}

export default DesignPage;