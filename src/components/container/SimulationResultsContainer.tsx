import {FC} from 'react';
import SimulationTable from "../table/SimulationTable.tsx";
import "../../styles/components/containers/SimulationContainer.css"
import "../../styles/components/containers/SimulationResultsContainer.css"
import ContinueButton from "../buttons/simulation/ContinueButton.tsx";

const SimulationResultsContainer: FC<{}> = ({}) => {
    return (
        <>
            <div className={"simulation-container"}>
                <h2>Bilan trimestriel</h2>
                <div className={"simulation-results-container"}>
                    <p>Chiffre d'affaire: CAValue €</p>
                    <p>Total des charge: chargesValue</p>
                    <p>Total des production: productionValue</p>
                    <p>Cotte de popularité: popularityValue</p>
                    <SimulationTable/>
                </div>
                <ContinueButton/>
            </div>
        </>
    );
};

export default SimulationResultsContainer;