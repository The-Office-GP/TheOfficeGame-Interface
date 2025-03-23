import {FC} from 'react';
import "../styles/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import SimulationResultsContainer from "../components/container/SimulationResultsContainer.tsx";
const SimulationResultsPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
<SimulationResultsContainer/>
            </section>
            <Footer/>
        </>
    );
};

export default SimulationResultsPage;