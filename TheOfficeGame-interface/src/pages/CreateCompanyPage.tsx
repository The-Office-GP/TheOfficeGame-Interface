import {FC} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


import "../styles/CreateCompanyPage.css"

const CreateCompanyPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"create-company-page-section"}>

            </section>
            <Footer/>
        </>
    );
};

export default CreateCompanyPage;