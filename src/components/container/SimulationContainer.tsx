import {FC} from 'react';
import "../../styles/components/containers/SimulationContainer.css"
import EmployeesDataList from "../company-displays/EmployeesDataDisplay.tsx";
import EmployeeItem from "../cards/employees-cards/EmployeeItem.tsx";
import employeesCard from "../cards/employees-cards/EmployeesCard.tsx";
import employeesList from "../list/EmployeesList.tsx";
import EmployeesSimulationCard from "../cards/employees-cards/EmployeesSimulationCard.tsx";
import SimulationTable from "../table/SimulationTable.tsx";

const SimulationContainer: FC<{}> = ({}) => {
    return (
        <>

            <div className={"simulation-container"}>
                <h2>Simulation</h2>
                <h3>Equipe</h3>
                <div>

                    <EmployeesSimulationCard/>
                </div>
                <h3>Production</h3>
                <div className={"production-settings"}>

                    <div>
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
                    <div>
                        <div className={"params-container"}>
                            <label>Palettes</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Chaise</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Table</label>
                            <input type={"range"} className={"range-input"}/>
                        </div>
                        <div className={"params-container"}>
                            <label>Cabane</label>
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