import {FC} from 'react';
import Header from "../components/Header.tsx";
import BuildCompagnyForm from "../components/forms/BuildCompanyForm.tsx";
import Footer from "../components/Footer.tsx";

import "../styles/pages/BuildingCompanyPage.css"


const BuildingCompanyPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"building-company-page-section"}>
                <BuildCompagnyForm/>
            </section>
            <Footer/>
        </>
    );
};

export default BuildingCompanyPage;