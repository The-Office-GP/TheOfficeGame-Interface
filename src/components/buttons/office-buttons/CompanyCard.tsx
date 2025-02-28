import {FC} from 'react';
import "../../../styles/components/cards/CompanyCard.css"


const CompanyCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"company-card"}>
                <h3>CompanyName</h3>
                <div>
                    <img  src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bd8d8b9d2dc9af93306a06/download/Business-model-1_(1).png"} alt={"img model company"} className={"company-card-img"}/>
                </div>
            </div>
        </>
    );
};

export default CompanyCard;