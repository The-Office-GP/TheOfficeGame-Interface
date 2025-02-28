import {FC} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import "../styles/pages/OfficeBackground.css"


import CreateCompanyCard from "../components/buttons/office-buttons/CreateCompanyCard.tsx";


const CreateCompanyPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <CreateCompanyCard/>
            </section>
            <Footer/>
        </>
    );
};

export default CreateCompanyPage;