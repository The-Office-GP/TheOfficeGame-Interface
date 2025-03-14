import {FC} from "react";
import {EmployeesType} from "../../../type/employes";

import "../../../styles/components/cards/RecruitmentCard.css"


const RecruitemetCardsItems: FC<{ employee: EmployeesType }> = ({employee}) => {
    return (
        <div className="recuitement-candidat">
            <div className={"candidate-picture-name"}>
            <h3>{employee.name}</h3>
            {/* Vérification si posterPath existe */}
            {employee.posterPath ? (
                <img src={employee.posterPath} alt="employee picture" className={"recruitment-img"}/>
            ) : (
                <img
                    src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4cd769b05981b7a585395/previews/preview2x/download/Planche_avatar14.webp"
                    alt="default employee"
                />
            )}
            </div>
            <div className={"employee-card-info"}>
                <p>Poste : {employee.job}</p>
                <p>Salaire : {employee.salary} €</p>
                <p>Niveau: {employee.level}</p>
            </div>

        </div>
    );
};


export default RecruitemetCardsItems;