import SaveButton from "../SaveButton/SaveButton";
import SettingsBar from "../SettingsBar/SettingsBar";
import "./TopBarComponent.css";

function TopBarComponent(props){
    return <div className="TopBarComponent">
        <SettingsBar/>
        <SaveButton designCode = {props.designCode}/>
        </div>;
}

export default TopBarComponent;
