import {FC} from 'react';
import "../../styles/BuildCompanyForm.css"

const BuildCompagnyForm: FC<{}> = ({}) => {
    return (
        <>
            <form className={"create-company-form"}>
                <h2>Créer une entreprise</h2>
                <label className={"form-label"}>Nom de l'entreprise</label>
                <input name={"company-name"} type={"text"} id={"input-form"}/>
                <label className={"form-label"}>Choix du model industriel</label>
                <div className="img-models-industry">
                    <div className="image-container">
                        <img
                            src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bc92b44eea2e9365666556/download/Business-model-1.png"
                            alt="image model industriel 1"/>
                        <div className="overlay">
                            <h3>Menuiserie</h3>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bc92b468fb071b96ff5318/download/Business-model-2.png"
                            alt="image model industriel 2"/>
                        <div className="overlay">
                            <h3>Laiterie</h3>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bc92b4c2195676bd45ed10/download/Business-model-3.png"
                            alt="image model industriel 3"/>
                        <div className="overlay">
                            <h3>Carrières</h3>
                        </div>
                    </div>
                </div>

                <button type={"submit"} className={"subscribe-button"}>Continuer</button>
            </form>
        </>
    );
};

export default BuildCompagnyForm;