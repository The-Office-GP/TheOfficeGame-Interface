import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Grid2} from "@mui/material";
import RecruitmentCard from "../components/cards/recruitement-cards/RecruitmentCard.tsx";

const RecruitmentPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
<Grid2 className={"recruitment-card-display"}>
    <RecruitmentCard/>
</Grid2>
            </section>
            <Footer/>
        </>
    );
};

export default RecruitmentPage;