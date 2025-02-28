import {FC} from 'react';
import "../styles/pages/GameDashboardPage.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import "../styles/pages/OfficeBackground.css"
import "../styles/components/menu-display/MenuContainer.css"
import SimulationButton from "../components/buttons/dashboard-buttons/SimulationButton.tsx";
import ProductionCard from "../components/cards/dashboard-cards/ProductionCard.tsx";
import EmployeesCard from "../components/cards/employees-cards/EmployeesCard.tsx";
import ToolsCard from "../components/cards/dashboard-cards/ToolsCard.tsx";
import ExitButton from "../components/buttons/global-buttons/ExitButton.tsx";



const GameDashboardPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <div className={"menu-container"}>
                   <ExitButton/>
                    <div className={"dashboard-display"}>
                        <div className={"icon-title"}>
                            <ImportantDevicesIcon className={"dashboard-icon"}/><h3>Dashboard</h3>
                        </div>
                        <div className={"metrics-cards-container"}>
                            <ProductionCard/>
                            <EmployeesCard/>
                            <ToolsCard/>
                        </div>
                        <SimulationButton/>
                    </div>
                </div>

            </section>
            <Footer/>
        </>
    );
};

export default GameDashboardPage;