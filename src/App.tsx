import './styles/App.css'
import CreateCompanyPage from "./pages/CreateCompanyPage.tsx";
import SubscribePage from "./pages/SubscribePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import BuildingCompanyPage from "./pages/BuildingCompanyPage.tsx";
import OfficePage from "./pages/OfficePage.tsx";
import GameHomePage from "./pages/GameHomePage.tsx";
import GameDashboardPage from "./pages/GameDashboardPage.tsx";
import MarcketPlacePage from "./pages/MarcketPlacePage.tsx";
import RecruitmentPage from "./pages/RecruitmentPage.tsx";
import SimulationPage from "./pages/SimulationPage.tsx";
import EventPage from "./pages/EventPage.tsx";

import YearCheckPage from "./pages/YearCheckPage.tsx";
import EmployeesPage2 from "./pages/EmployeesPage2.tsx";
import SimulationResultsPage from "./pages/SimulationResultsPage.tsx";
import SupplierMarketPlace from "./pages/SupplierMarketPlace.tsx";


function App() {


    return (
        <>
            <SubscribePage/>
            <LoginPage/>
            <CreateCompanyPage/>
            <BuildingCompanyPage/>
            <OfficePage/>
            <GameHomePage/>
            <EmployeesPage2/>
            <SupplierMarketPlace/>
            <RecruitmentPage/>
            <MarcketPlacePage/>
            <GameDashboardPage/>
            <SimulationPage/>
            <SimulationResultsPage/>
            <YearCheckPage/>
            <EventPage/>

        </>
    )
}

export default App