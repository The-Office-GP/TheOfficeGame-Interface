import {FC} from 'react';
import "../../styles/form/Form.css"

const SubscribeForm: FC<{}> = ({}) => {
    return (
        <>
            <form className={"subscribe-form"}>
                <h2>Inscription</h2>
                <label className={"form-label"}>Nom d'utilisateur</label>
                <input name={"user-name"} type={"text"} id={"input-form"}/>
                <label className={"form-label"}>Email</label>
                <input name={"email"} type={"email"} id={"input-form"}/>
                <label className={"form-label"}>Mot de passe</label>
                <input name={"password"} type={"password"} id={"input-form"}/>
                <button type={"submit"} className={"subscribe-button"}>S'inscrire</button>
            </form>
        </>
    );
};

export default SubscribeForm;