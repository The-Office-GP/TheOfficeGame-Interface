import {FC} from 'react';
import "../../../styles/components/buttons/SupplierMarketPlaceButtons.css"
import ExpandPremisesButton from "../ExpandPremisesButton.tsx";

const SupplierMarketPlaceButtons: FC<{}> = ({}) => {
    return (
            <div className={"buttons-container"}>
                <button className={"quality-button"}>Basse</button>
                <button className={"quality-button"}>Classique</button>
                <button className={"quality-button"}>Moyenne</button>
                <button className={"quality-button"}>Haut</button>
                <button className={"quality-button"}>Premium</button>
                <ExpandPremisesButton/>
            </div>

    );
};

export default SupplierMarketPlaceButtons;