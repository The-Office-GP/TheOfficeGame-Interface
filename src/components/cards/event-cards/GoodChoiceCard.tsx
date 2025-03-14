import {FC} from 'react';
import "../../../styles/components/cards/EventCard.css"
import "../../../styles/components/cards/BadAndGoodChoiceCard.css"


const GoodChoiceCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"choice-card"}>
                <img src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67d301228b727aff6764e25a/download/Planche_avatar4_2.png"} alt={"consequence-picture"} className={"choice-consequences-picture"}/>
                <div className={"choice-consequences"}>
                    <p>Côut</p>
                    <progress></progress>
                    <p>Humeure générale</p>
                    <progress></progress>
                    <p>Production</p>
                    <progress></progress>
                    <p>Poupularitée</p>
                    <progress></progress>
                </div>
            </div>
        </>
    );
};

export default GoodChoiceCard;