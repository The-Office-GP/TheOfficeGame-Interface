import {FC} from 'react';
import "../../../styles/backgound-sections/BackgroundCompanyModel1Level1.css"
import MiniDashboard from "../../../components/company-displays/MiniDashboard.tsx";
import "../../../styles/backgound-sections/BackgroundCompanyModel1Level1.css"
import GameMenu from "../../../components/company-displays/GameMenu.tsx";



const BackgroundCompanyModel1Level1: FC<{}> = ({}) => {
    return (
        <>
            <section className={"background-company-model1-level1"}>
                <div className={"nav-mini-dashbord"}>
                    <GameMenu/>
                    <MiniDashboard/>
                </div>
                <h3 className={"level"}>Niveau 1</h3>
            </section>
        </>
    );
};

export default BackgroundCompanyModel1Level1;