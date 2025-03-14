import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import EventSwipe from "../components/cards/event-cards/EventSwipe.tsx";

const EventPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                   <EventSwipe/>
            </section>
            <Footer/>
        </>
    );
};

export default EventPage;