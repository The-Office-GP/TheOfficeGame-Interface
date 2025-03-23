import {FC} from 'react';
import "../../../styles/components/buttons/ChoiceButton.css"

const NoChoiceButton: FC<{}> = ({}) => {
    return (
        <>
            <div className={"choice"}>
                <p className={"p-choice"}>NON</p>
                <img
                    src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67c45ec91ed01e796b8c0501/download/Left-choice.png"}
                    alt={"flèche gauche ne pas recruter"} className={"choice-button"}/>
            </div>
        </>
    );
};

export default NoChoiceButton;