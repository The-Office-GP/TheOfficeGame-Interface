import {FC} from 'react';
import "../../../styles/components/buttons/EmployeesJobs-buttons.css"

const EmployeesJobsButtons: FC<{}> = ({}) => {
    return (
        <>
            <div className={"job-buttons-container"}>
                <button className={"job-button"}>Marketing</button>
                <button className={"job-button"}>Vente</button>
                <button className={"job-button"}>Production</button>
            </div>
        </>
    );
};

export default EmployeesJobsButtons;