import {FC} from 'react';
import ExitButton from "../../buttons/global-buttons/ExitButton.tsx";

import "../../../styles/components/cards/RecruitmentCard.css"
import NoChoiceButton from "../../buttons/recruitment-buttons/NoChoiceButton.tsx";
import YesChoiceButton from "../../buttons/recruitment-buttons/YesChoiceButton.tsx";
import EmployeesSwipe from "../employees-cards/EmployeeSwipe.tsx";


const RecruitmentCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"recruitment-cards-container"}>
               <div className={"recruitment-card-header"}>
                <ExitButton/>
                <div className={"h3-description"}>
                    <h3>Recrutement</h3>
                    <p>Nous avons besoins de recruter. Anna Lyse, votre secrétaire vous a organisé une série d'entretiens. Glissez la carte du candidat vers la gauche ou la droite pour faire votre choix.</p>
                </div>
                <img className={'recruitment-img'} src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4d5aabbedb79add2c59e2/download/Avatar-planch2-f2.png"} alt={"recruitment-people"}/>
               </div>
                <div className={"choice-container"}>
                    <NoChoiceButton/>
                    <EmployeesSwipe EmployeesData={undefined}/>
                    <YesChoiceButton/>
                </div>
            </div>
        </>
    );
};

export default RecruitmentCard;