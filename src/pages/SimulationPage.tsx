import {FC} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import SimulationContainer from "../components/container/SimulationContainer.tsx";

const SimulationPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
<SimulationContainer></SimulationContainer>
            </section>
            <Footer/>
        </>
    );
};

export default SimulationPage;