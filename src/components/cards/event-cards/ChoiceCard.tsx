import {FC} from 'react';
import "../../../styles/components/cards/EventCard.css"
import NoChoiceButton from "../../buttons/recruitment-buttons/NoChoiceButton.tsx";
import YesChoiceButton from "../../buttons/recruitment-buttons/YesChoiceButton.tsx";


const ChoiceCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"event-choice-card-container"}>

                <div className={"event-card-header"}>
                    <div className={"event-info"}>
                        <h3>Évenement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut
                            aliquip ex ea commodo consequat.</p>
                    </div>
                    <img
                        src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4cd76c8024a27d894577b/download/Planche_avatar16.png"}
                        alt={"event-people"} className={"event-people-picture"}/>
                </div>
                <div className={"choice-place"}>
                    <NoChoiceButton/>
                    <div className={"choice-card"}>

                        <img
                            src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4ce5d22b9467009f26581/download/Planche-avatar-phone-question.png"}
                            className={"choice-card-picture"}/>
                        <p className={"choice-description"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua.
                        </p>

                    </div>
                    <YesChoiceButton/>
                </div>
            </div>

        </>
    );
};

export default ChoiceCard;