import {FC} from "react";
import EmployeesData from "../../data/emlpoyees.json";
import EmployeeItem from "../cards/employees-cards/EmployeeItem.tsx"; // Assurez-vous que le fichier est bien "list.json"

import "../../styles/pages/EmpoyeesPage.css"
const EmployeeList: FC = () => {
    if (!EmployeesData.results || !Array.isArray(EmployeesData.results)) {
        return <p>Erreur : Impossible de charger les employés.</p>;
    }

    return (
        <div className="employees-list">
            {EmployeesData.results.map((employee) => (
                <EmployeeItem key={employee.id} employee={{...employee, health: employee.health}}/>
            ))}
        </div>
    );
};

export default EmployeeList;