import {FC} from 'react';
import "../../../styles/components/buttons/StartSimulationButton.css"

const StartSimulationButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"start-simulation-button"}>Lancer simulation</button>
        </>
    );
};

export default StartSimulationButton;