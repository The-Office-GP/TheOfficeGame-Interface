import {FC} from "react";
import TinderCard from "react-tinder-card";
import "../../../styles/components/cards/RecruitmentCard.css"

type Employee = {
    id: number;
    name: string;
    gender: string;
    seniority: number;
    salary: number;
    level: number;
    status: string;
    job: string;
    mood: string;
    health: number;
    posterPath: string;
};

type EmployeesListProps = {
    cards: Employee[];
    onSwipe: (direction: string, id: number) => void;
};

const CardList: FC<EmployeesListProps> = ({cards, onSwipe}) => {
    if (cards.length === 0) return <p>Aucune carte restante</p>;

    // On récupère la dernière carte pour l'afficher
    const topCard = cards[cards.length - 1];

    return (
        <div className="relative w-[300px] h-[500px]">
            <TinderCard
                key={topCard.id}
                onSwipe={(dir: string) => onSwipe(dir, topCard.id)}
                preventSwipe={["up", "down"]}
                className="absolute w-full h-full"
            >
                <div className="recruitment-card">
                    <div className={"candidate-picture-name"}>
                        <h3 className="text-xl font-bold">{topCard.name}</h3>
                        <img src={topCard.posterPath} alt={"avatar du candidat"} className={"candidat-picture"}/>
                    </div>
                    <div className="w-full bg-black bg-opacity-70 text-white p-4 rounded-b-2xl">
                        <p className="text-sm">Poste: {topCard.job}</p>
                        <p className="text-sm">Salaire: {topCard.salary}€</p>
                        <p className="text-sm">Niveau: {topCard.level}</p>
                    </div>
                </div>
            </TinderCard>
        </div>
    );
};

export default CardList;