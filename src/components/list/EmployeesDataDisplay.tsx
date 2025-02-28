import {FC} from 'react';
import EmployeesData from "../../data/emlpoyees.json";
import {EmployeesType} from "../../type/employes";

import "../../styles/components/list/EmployeesDataDisplay.css"

const EmployeesDataList: FC<{}> = ({}) => {
    return (
        <>
            {EmployeesData.results.map((employee: EmployeesType) => (
                <div key={employee.id} className={"my-employee-list"}>
                    <p className={"employees-info"}>{employee.name}</p>
                    <p className={"employees-info"}>{employee.job}</p>
                    <p className={"employees-info"}> {employee.level}</p>
                    <p className={"employees-info"}>{employee.salary} €</p>

                </div>
            ))}
        </>
    );
};

export default EmployeesDataList;