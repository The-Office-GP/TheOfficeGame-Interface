import {FC} from "react";
import NoChoiceButton from "../../buttons/recruitment-buttons/NoChoiceButton";
import YesChoiceButton from "../../buttons/recruitment-buttons/YesChoiceButton";
import {EventType} from "../../../type/event";
import "../../../styles/components/cards/EventCard.css";
import EventChoice from "./EventChoice.tsx";

type ChoiceCardProps = {
    event: EventType;
};

const ChoiceCard: FC<ChoiceCardProps> = ({event}) => {
    return (
        <div className="event-choice-card-container">
            <div className="event-card-header">
                <div className="event-info">
                    <h3>Événement</h3>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                </div>
                {/* Vous pouvez ajouter ici une image ou un autre visuel si disponible dans l'objet event */}
            </div>
            <div className="choice-place">
                <NoChoiceButton/>
                <EventChoice/>
                <YesChoiceButton/>
            </div>
        </div>
    );
};

export default ChoiceCard;