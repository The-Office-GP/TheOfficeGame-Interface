import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ChoiceCard from "../components/cards/event-cards/ChoiceCard.tsx";

const EventPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>

            <ChoiceCard/>

            </section>
            <Footer/>
        </>
    );
};

export default EventPage;