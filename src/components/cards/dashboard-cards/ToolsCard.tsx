import {FC} from 'react';
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import "../../../styles/components/cards/MetricsCard.css"
const ToolsCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"metrics-card"}>
                <div className={"icon-title"}>
                    <PrecisionManufacturingIcon className={"dashboard-icon"}/>
                    <h4> Matériel</h4>
                </div>
                <ul className={"metrics-lists"}>
                    <li>Machines : toolsValue</li>
                    <li>Côut : chargesValue</li>
                </ul>
            </div>
        </>
    );
};

export default ToolsCard;