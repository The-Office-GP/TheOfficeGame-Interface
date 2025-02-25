import './styles/App.css'
import CreateCompanyPage from "./pages/CreateCompanyPage.tsx";
import SubscribePage from "./pages/SubscribePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import BuildingCompanyPage from "./pages/BuildingCompanyPage.tsx";
import OfficePage from "./pages/OfficePage.tsx";
import GameHomePage from "./pages/GameHomePage.tsx";
import GameDashboardPage from "./pages/GameDashboardPage.tsx";
import MarcketPlacePage from "./pages/MarcketPlacePage.tsx";
import GameEmployeesPage from "./pages/GameEmpoyeesPage.tsx";
import RecruitmentPage from "./pages/RecruitmentPage.tsx";
import SimulationPage from "./pages/SimulationPage.tsx";
import EvenementPage from "./pages/EvenementPage.tsx";
import TreeMonthCheckPage from "./pages/TreeMonthCheckPage.tsx";
import YearCheckPage from "./pages/YearCheckPage.tsx";


function App() {


    return (
        <>
            <SubscribePage/>
            <LoginPage/>
            <CreateCompanyPage/>
            <BuildingCompanyPage/>
            <OfficePage/>
            <GameHomePage/>
            <GameDashboardPage/>
            <SimulationPage/>
            <MarcketPlacePage/>
            <GameEmployeesPage/>
            <RecruitmentPage/>
            <EvenementPage/>
            <TreeMonthCheckPage/>
            <YearCheckPage/>

        </>
    )
}

export default App