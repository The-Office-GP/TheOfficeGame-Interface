import {FC, useState} from 'react';
import EmployeesData from "../../../data/emlpoyees.json"
import {EmployeesType} from "../../../type/employes";
import CardList from "../../list/CardList.tsx";

const EmployeesSwipe: FC<{EmployeesData:any}> = ({}) => {
    // Vérification que les données existent bien
    if (!EmployeesData.results || !Array.isArray(EmployeesData.results)) {
        return <p>Erreur : Impossible de charger les employés.</p>;
    }

    // Initialisation de l'état avec la liste des employés
    const [cards, setCards] = useState<EmployeesType[]>(EmployeesData.results);

    // Callback lors d'un swipe
    const handleSwipe = (direction: string, id: number) => {
        console.log(`Swiped ${direction} sur l'employé avec id : ${id}`);
        // Optionnel : retirer la card swipée de la liste
        setCards((prevCards:EmployeesType) => prevCards.filter((card:EmployeesType) => card.id !== id));
    };

    return (
        <div className="employee-swipe-container flex justify-center items-center h-screen">
            <CardList cards={cards} onSwipe={handleSwipe}/>
        </div>
    );
};

export default EmployeesSwipe;