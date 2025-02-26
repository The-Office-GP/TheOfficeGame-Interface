import {FC} from 'react';
import "../../../styles/components/buttons/LevelButton.css"
import StarIcon from "@mui/icons-material/Star";

const Level3ToolButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"level-tool-button"}><StarIcon className={"stars-icons-button"}/><StarIcon
                className={"stars-icons-button"}/><StarIcon className={"stars-icons-button"}/></button>
        </>
    );
};

export default Level3ToolButton;