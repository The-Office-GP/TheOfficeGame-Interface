import {FC} from 'react';
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import "../../../styles/components/cards/MetricsCard.css"
const ProductionCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"metrics-card"}>
                <div className={"icon-title"}>
                    <StackedLineChartIcon className={"dashboard-icon"}/>
                    <h4>Production</h4>
                </div>
                <ul className={"metrics-lists"}>
                    <li>Bénéfices : profitValue</li>
                    <li>Perte : lossesValue</li>
                    <li>Charges :chargeValue</li>
                    <li>CA:CAValue</li>
                </ul>
            </div>
        </>
    );
};

export default ProductionCard;