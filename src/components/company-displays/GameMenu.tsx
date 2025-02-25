import {FC} from 'react';
import "../../styles/components/containers/GameMenu.css"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleIcon from '@mui/icons-material/People';


const GameMenu: FC<{}> = ({}) => {
    return (
        <>
            <nav className={"game-nav"}>
                   <ImportantDevicesIcon className={"menu-icon"}/>
                   <PrecisionManufacturingIcon className={"menu-icon"}/>
                   <PeopleIcon className={"menu-icon"}/>
            </nav>
        </>
    );
};

export default GameMenu;