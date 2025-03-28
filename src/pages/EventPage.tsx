import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import EventChoice from "../components/cards/event-cards/EventChoice.tsx";

const EventPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                   <EventChoice/>
            </section>
            <Footer/>
        </>
    );
};

export default EventPage;