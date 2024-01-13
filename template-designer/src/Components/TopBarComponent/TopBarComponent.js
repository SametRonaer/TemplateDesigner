import SaveButton from "../SaveButton/SaveButton";
import SettingsBar from "../SettingsBar/SettingsBar";
import "./TopBarComponent.css";

function TopBarComponent(){
    return <div className="TopBarComponent">
        <SettingsBar/>
        <SaveButton/>
        </div>;
}

export default TopBarComponent;
