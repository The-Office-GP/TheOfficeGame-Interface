import {FC} from 'react';
import "../styles/pages/SubscribePage.css"
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import SubscribeForm from "../components/forms/SubscribeForm.tsx";



const SubscribePage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
            <SubscribeForm/>
            </section>
            <Footer/>
        </>

    );
};

export default SubscribePage;