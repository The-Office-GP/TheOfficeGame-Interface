import {FC} from 'react';
import "../../../styles/components/buttons/LevelButton.css"
import StarIcon from '@mui/icons-material/Star';

const Level1ToolsButton: FC<{}> = ({}) => {
    return (
        <>
           <button className={"level-tool-button"}><StarIcon className={"stars-icons-button"}/></button>
        </>
    );
};

export default Level1ToolsButton;