import {FC} from 'react';
import "../../../styles/components/buttons/SimulationButton.css"

const SimulationButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"simulation-button"}>Simulation</button>
        </>
    );
};

export default SimulationButton;