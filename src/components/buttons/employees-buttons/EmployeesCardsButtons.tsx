import {FC} from 'react';
import "../../../styles/components/buttons/EmployeesCardsButtons.css"

const EmployeesCardsButtons: FC<{}> = ({}) => {
    return (
        <>
            <div className={"lists-dashboard-cards-buttons"}>
                <form>
                    <select className={"increase-selection"} >
                        <option className={"increase-options"} id={"increase-option-1"}>2000 €</option>
                        <option className={"increase-options"} id={"increase-option-2"}>2500 €</option>
                        <option className={"increase-options"} id={"increase-option-3"}>3000 €</option>
                        <option className={"increase-options"} id={"increase-option-4"}>4500 €</option>
                        <option className={"increase-options"} id={"increase-option-5"}>5000 €</option>
                    </select>
                    <button className={"increase-button"}>Augmenter</button>
                </form>
                <button className={"dismiss-button"}>Licencier</button>
            </div>
        </>
    );
};

export default EmployeesCardsButtons;