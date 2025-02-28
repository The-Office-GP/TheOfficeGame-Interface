import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Grid2} from "@mui/material";

import EmployeeList from "../data/EmployeesList.tsx";

import "../styles/pages/EmpoyeesPage.css"
import EmployeesLevelButtons from "../components/buttons/employees-buttons/EmployeesLevelButtons.tsx";
import EmployeesJobsButtons from "../components/buttons/employees-buttons/EmployeesJobsButtons.tsx";
import EmployeesDataDisplay from "../components/list/EmployeesDataDisplay.tsx";
import RecuiteButton from "../components/buttons/employees-buttons/RecruiteButton.tsx";


const EmployeesPage2: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"} id={"list-section"}>
                <div className={"display-container"}>
                    <aside className={"employees-aside"}>
                        <h3>Mes salariés</h3>
                        <EmployeesJobsButtons/>
                        <EmployeesLevelButtons/>
                        <EmployeesDataDisplay/>
                        <RecuiteButton/>
                    </aside>
                    <Grid2 className={"employees-cards-container"}>
                        <EmployeeList/>
                    </Grid2>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default EmployeesPage2;