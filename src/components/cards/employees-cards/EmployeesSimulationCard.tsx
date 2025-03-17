import {FC} from 'react';
import EmpolyeesData from "../../../data/emlpoyees.json"
import {EmployeesType} from "../../../type/employes";
import {Grid2} from "@mui/material";

import "../../../styles/components/cards/EmployeesSimulationCard.css"

const EmployeesSimulationCard: FC<{}> = ({}) => {
    return (
        <>
            <Grid2 className={"employees-simulation-cards-display"}>
                {EmpolyeesData.results.map((employee: EmployeesType) => (
                    <div className={"employee-simulation-card"} key={employee.id}>
                        <p className={"employees-data"}>{employee.name}</p>
                        <p className={"employees-data"}>Note de compétence :{employee.level}  </p>
                        <p className={"employees-data"}>Humeur : {employee.mood}</p>
                        <p className={"employees-data"}>Salaire journalier brute : {employee.salary}</p>
                        <p className={"employees-data"}>Etat: {employee.status}</p>
                        <p className={"employees-data"}>Poste : {employee.job}</p>
                        <p className={"employees-data"}>Santé: {employee.health}</p>
                        <p className={"employees-data"}>Priorité de vente : priorityValue</p>
                    </div>
                ))}
            </Grid2>
        </>
    );
};

export default EmployeesSimulationCard;