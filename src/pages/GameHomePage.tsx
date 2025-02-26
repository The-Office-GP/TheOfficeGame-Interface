import {FC} from 'react';
import BackgroundCompanyModel1Level1
    from "../background/background-company-level/company-model1/BackgroundCompanyModel1Level1.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";



const GameHomePage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
                <BackgroundCompanyModel1Level1/>
            <Footer/>
        </>
    );
};

export default GameHomePage;