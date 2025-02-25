import {FC} from 'react';
import LoginForm from "../components/forms/LoginForm.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import "../styles/pages/LoginPage.css"


const LoginPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"login-page-section"}>
                <LoginForm/>
            </section>
            <Footer/>
        </>
    );
};

export default LoginPage;