import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ExitButton from "../components/buttons/ExitButton.tsx";
import Level1ToolsButton from "../components/buttons/marcket-place-buttons/Level1ToolsButton.tsx";
import Level2ToolsButton from "../components/buttons/marcket-place-buttons/Level2ToolsButton.tsx";
import Level3ToolButton from "../components/buttons/marcket-place-buttons/Level3ToolsButton.tsx";
import Level4ToolsButton from "../components/buttons/marcket-place-buttons/Level4ToolsButton.tsx";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

import "../styles/components/menu-display/MenuContainer.css"
import "../styles/pages/MarcketPlacePage.css"

const MarketPlacePage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <div className={"menu-container"}>
                    <div className={"exit-buttons-container"}>
                        <ExitButton/>
                        <div className={"buttons-container"}>
                            <Level1ToolsButton/>
                            <Level2ToolsButton/>
                            <Level3ToolButton/>
                            <Level4ToolsButton/>
                        </div>
                    </div>
                    <div className={"display"}>
                        <div className={"icon-title"}>
                            <PrecisionManufacturingIcon className={"icon"}/>
                            <h3>Boutique</h3>
                        </div>
                        <div className={"card-header"}>
                            <img
                                src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67befb94c61b80711fd91222/download/tool-dynamic-color.png"}
                                alt={"image de l'outils"}
                            />
                            <div className={"description-part"}>

                                <h4>ToolName </h4>
                                <p className={"description"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu lectus eu nibh
                                    dictum mollis eget in felis.Praesent fermentum sapien lacus.
                                </p>
                            </div>
                        </div>
                        <div className={"tools-properties"}>
                            <div className={"price"}>
                                <p>Prix :</p>
                                <p>PriceValue €</p>
                            </div>
                            <div>
                                <p>Qualité :</p>
                                <progress className={"progress"} id={"quality-progress"}></progress>
                            </div>
                            <div>
                                <p>Production :</p>
                                <progress className={"progress"} id={"production-progress"}></progress>
                            </div>
                            <div>
                                <p>Côut de maintenance :</p>
                                <progress className={"progress"} id={"maintenance-progress"}></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default MarketPlacePage;