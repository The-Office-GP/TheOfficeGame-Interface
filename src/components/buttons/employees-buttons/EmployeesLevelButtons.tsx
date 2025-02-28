import {FC} from 'react';
import "../../../styles/components/buttons/EmployeesLevelsButtons.css"

const EmployeesLevelButtons: FC<{}> = ({}) => {
    return (
        <>
            <div className={"level-buttons-container"}>
                <button className={"level-button"}>Niveau 5</button>
                <button className={"level-button"}>Niveau 6</button>
                <button className={"level-button"}>Niveau 7</button>
                <button className={"level-button"}>Niveau 8</button>
                <button className={"level-button"}>Niveau 9</button>
                <button className={"level-button"}>Niveau 10</button>
            </div>
        </>
    );
};

export default EmployeesLevelButtons;