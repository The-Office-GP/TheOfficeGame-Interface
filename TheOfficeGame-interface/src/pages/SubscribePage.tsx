import {FC} from 'react';
import "../styles/SubscribePage.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import SubscribeForm from "../components/forms/SubscribeForm.tsx";


const SubscribePage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"subscribe-page-section"}>
            <SubscribeForm/>
            </section>
            <Footer/>
        </>

    );
};

export default SubscribePage;