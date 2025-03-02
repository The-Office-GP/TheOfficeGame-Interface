import {FC} from 'react';
import ExitButton from "../../buttons/global-buttons/ExitButton.tsx";

import "../../../styles/components/cards/RecruitmentCard.css"
import NoChoiceButton from "../../buttons/recruitment-buttons/NoChoiceButton.tsx";
import YesChoiceButton from "../../buttons/recruitment-buttons/YesChoiceButton.tsx";

const RecruitmentCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"recruitment-cards-container"}>
               <div className={"recruitment-card-header"}>
                <ExitButton/>
                <div className={"h3-description"}>
                    <h3>Recrutement</h3>
                    <p>Nous avons besoins de recruter pour un poste de PostName. Anna, votre secrétaire vous a organiser une série d'entretiens. Glissez la carte du candidat vers la gauche ou la droite pour faire votre choix.</p>
                </div>
                <img className={'recruitment-img'} src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4d5aabbedb79add2c59e2/download/Avatar-planch2-f2.png"} alt={"recruitment-people"}/>
               </div>
                <div className={"choice-container"}>
                    <NoChoiceButton/>
                <div className={"recruitment-card"}>
                    <div className={"candidate-picture-name"}><img
                        src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4ce5d42e52c993dbf07da/download/Planche-avatar-meet.png"}
                        alt={"\n" + "image-candidat"}/>
                        <h4>CandidateName</h4>
                    </div>
                    <p>Poste : </p>
                    <p>Niveau :</p>
                    <p>Salaire :</p>
                </div>
                    <YesChoiceButton/>
                </div>
            </div>
        </>
    );
};

export default RecruitmentCard;