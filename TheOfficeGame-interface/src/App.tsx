import './styles/App.css'
import CreateCompanyPage from "./pages/CreateCompanyPage.tsx";
import SubscribePage from "./pages/SubscribePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import BuildCompagnyForm from "./components/forms/BuildCompanyForm.tsx";
import BuildingCompanyPage from "./pages/BuildingCompanyPage.tsx";


function App() {


    return (
        <>
            <SubscribePage/>
            <LoginPage/>
            <CreateCompanyPage/>
            <BuildingCompanyPage/>
        </>
    )
}

export default App