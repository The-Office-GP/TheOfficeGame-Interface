import {FC} from 'react';
import "../../styles/components/containers/SimulationContainer.css"
import StartSimulation from "../buttons/simulation/StartSimulation.tsx";

const SimulationContainer: FC<{}> = ({}) => {
    return (
        <>
            <div className={"simulation-container"}>
                <h2>Simulation</h2>
                <div className={"settings"}>
                    <div className={"production-settings-part"}>
                        <div className={"setting-container-production"}>
                            <label>Rythme de production</label>
                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                        <div className={"setting-container-production"}>
                            <label>Prioriser la production</label>
                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                        <div className={"setting-container-production"}>
                            <label className={"marketing-label "}>Prioriser le marketing &nbsp; </label>
                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                    </div>
                    <div className={"products-settings-part"}>
                            <div className={"settings-container-products"}>
                                <label>Palettes</label>
                                <input type={"range"} className={"range-input-products"}/>
                            </div>
                            <div className={"settings-container-products"}>
                                <label>Chaises</label>
                                <input type={"range"} className={"range-input-products"}/>
                            </div>
                            <div className={"settings-container-products"}>
                                <label>Tables</label>
                                <input type={"range"} className={"range-input-products"}/>
                            </div>
                            <div className={"settings-container-products"}>
                                <label>Cabanes</label>
                                <input type={"range"} className={"range-input-products"}/>
                            </div>
                    </div>
                </div>
                <StartSimulation/>
            </div>
        </>
    );
};

export default SimulationContainer;