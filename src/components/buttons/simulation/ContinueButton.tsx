import {FC} from 'react';

import "../../../styles/components/buttons/ContinueButton.css"

const ContinueButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"continue-button"}>Continuer</button>
        </>
    );
};

export default ContinueButton;