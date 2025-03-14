import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import eventsData from "../../../data/event.json";
import {EventType} from "../../../type/event"; // Assurez-vous que ce type correspond à la structure de vos données
import NoChoiceButton from "../../buttons/recruitment-buttons/NoChoiceButton";
import YesChoiceButton from "../../buttons/recruitment-buttons/YesChoiceButton";
import "../../../styles/components/cards/EventCard.css";


const EventSwipe: React.FC = () => {
    if (!eventsData.events || !Array.isArray(eventsData.events)) {
        return <p>Erreur : Impossible de charger les événements.</p>;
    }

    // On initialise l'état avec la liste des événements
    const [events, setEvents] = useState<EventType[]>(eventsData.events);

    // Fonction appelée lors du swipe
    const handleSwipe = (direction: string, id: number) => {
        console.log(`Swiped ${direction} sur l'événement avec id : ${id}`);
        // Retire l'événement swipé de la liste
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    };

    if (events.length === 0) return <p>Aucun événement restant</p>;

    // On affiche uniquement l'événement du dessus (le dernier de la liste.)
    const topEvent = events[events.length - 1];

    return (

                <div className="event-choice-card-container">
                    <div className="event-card-header">
                        <div className="event-info">
                            <h3>Événement</h3>
                            <h4>{topEvent.title}</h4>
                            <p>{topEvent.description}</p>
                        </div>
                        {/* Vous pouvez ajouter ici une image ou un autre visuel si disponible */}
                    </div>
                    <div className="choice-place">
                        <NoChoiceButton/>
                        <TinderCard
                            key={topEvent.id}
                            onSwipe={(dir: string) => handleSwipe(dir, topEvent.id)}
                            preventSwipe={["up", "down"]}
                            className="absolute w-full h-full"
                        >
                        <div className="choice-card">
                            <img
                                src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4ce5d22b9467009f26581/download/Planche-avatar-phone-question.png"
                                alt="choice preview"
                                className="choice-card-picture"
                            />
                            <p className="choice-description">{topEvent.consequencesPreview}</p>
                        </div>
                        </TinderCard>
                        <YesChoiceButton/>
                    </div>
                </div>


    );
};

export default EventSwipe;