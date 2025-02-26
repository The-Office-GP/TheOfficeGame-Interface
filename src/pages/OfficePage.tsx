import {FC} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import LockedCompanyCard from "../components/cards/LockedCompanyCard.tsx";
import CompanyCard from "../components/cards/CompanyCard.tsx";
import {Grid2} from "@mui/material";

import "../styles/pages/OfficePage.css"
import "../styles/pages/OfficeBackground.css"

const OfficePage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <Grid2 className={"company-cards-carousel"}>
                    <LockedCompanyCard/>
                    <CompanyCard/>
                    <LockedCompanyCard/>
                </Grid2>

            </section>
            <Footer/>
        </>
    );
};

export default OfficePage;