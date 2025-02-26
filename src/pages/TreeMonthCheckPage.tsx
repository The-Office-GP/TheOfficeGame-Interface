import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const TreeMonthCheckPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>

            </section>
            <Footer/>
        </>
    );
};

export default TreeMonthCheckPage;