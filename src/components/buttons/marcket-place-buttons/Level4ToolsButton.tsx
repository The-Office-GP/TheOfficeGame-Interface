import {FC} from 'react';
import StarIcon from "@mui/icons-material/Star";

const Level4ToolsButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"level-tool-button"}><StarIcon className={"stars-icons-button"}/><StarIcon
                className={"stars-icons-button"}/><StarIcon className={"stars-icons-button"}/><StarIcon
                className={"stars-icons-button"}/></button>
        </>
    );
};

export default Level4ToolsButton;