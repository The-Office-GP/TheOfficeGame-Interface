import {FC} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


import "../styles/pages/CreateCompanyPage.css"
import CreateCompanyCard from "../components/cards/CreateCompanyCard.tsx";

const CreateCompanyPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"create-company-page-section"}>
                <CreateCompanyCard/>
            </section>
            <Footer/>
        </>
    );
};

export default CreateCompanyPage;