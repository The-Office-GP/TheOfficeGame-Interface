import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Grid2} from "@mui/material";

import EmployeeList from "../components/lists/EmployeesList.tsx";

import "../styles/pages/EmpoyeesPage.css"
import EmployeesLevelButtons from "../components/buttons/employees-buttons/EmployeesLevelButtons.tsx";
import EmployeesJobsButtons from "../components/buttons/employees-buttons/EmployeesJobsButtons.tsx";
import RecuiteButton from "../components/buttons/employees-buttons/RecruiteButton.tsx";
import PeopleIcon from "@mui/icons-material/People";


const EmployeesPage2: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"} id={"lists-section"}>
                <div className={"display-container"}>
                    <aside className={"employees-aside"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes salariés</h3>
                        </div>
                        <EmployeesJobsButtons/>
                        <EmployeesLevelButtons/>
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