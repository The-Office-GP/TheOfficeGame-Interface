import {FC} from 'react';
import "../../styles/components/containers/SimulationContainer.css"

import EmployeesSimulationCard from "../cards/employees-cards/EmployeesSimulationCard.tsx";
import SimulationTable from "../table/SimulationTable.tsx";

const SimulationContainer: FC<{}> = ({}) => {
    return (
        <>
            <div className={"simulation-container"}>
                <h2>Simulation</h2>
                <h3>Equipe</h3>
                    <EmployeesSimulationCard/>
                <h3>Production</h3>
                <div className={"production-settings"}>

                    <div className={"production-settings-part"}>
                        <div className={"params-container"}>
                            <label>Rythme de production</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Prioriser la production</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Prioriser le marketing</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                    </div>
                    <div className={"production-settings-part"}>
                        <div className={"params-container"}>
                            <label>Palettes</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Chaises</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Tables</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Cabanes</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                    </div>
                </div>
                <SimulationTable/>

            </div>
        </>
    );
};

export default SimulationContainer;