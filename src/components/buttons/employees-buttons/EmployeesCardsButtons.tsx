import {FC} from 'react';
import "../../../styles/components/buttons/EmployeesCardsButtons.css"

const EmployeesCardsButtons: FC<{}> = ({}) => {
    return (
        <>
            <div className={"list-dashboard-cards-buttons"}>
                <button>Licencier</button>
                <form>
                    <select>
                        <option>2000 €</option>
                        <option>2500 €</option>
                        <option>3000 €</option>
                        <option>4500 €</option>
                        <option>5000 €</option>
                    </select>
                    <button>Augmenter</button>
                </form>
            </div>
        </>
    );
};

export default EmployeesCardsButtons;