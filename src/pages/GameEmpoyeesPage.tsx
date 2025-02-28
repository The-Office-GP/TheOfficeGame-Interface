import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import ExitButton from "../components/buttons/global-buttons/ExitButton.tsx";
import Level1ToolsButton from "../components/buttons/marcket-place-buttons/Level1ToolsButton.tsx";
import Level2ToolsButton from "../components/buttons/marcket-place-buttons/Level2ToolsButton.tsx";
import Level3ToolButton from "../components/buttons/marcket-place-buttons/Level3ToolsButton.tsx";
import Level4ToolsButton from "../components/buttons/marcket-place-buttons/Level4ToolsButton.tsx";
import Footer from "../components/Footer.tsx";
import PeopleIcon from "@mui/icons-material/People";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import RecuiteButton from "../components/buttons/employees-buttons/RecruiteButton.tsx";


function createData(
    name: string,
    firstname:string,
    niveau: number,
    mood: string,
    productivity: number,
) {
    return {name, firstname, niveau, mood, productivity};
}

const rows = [
    createData('Name', "firstName", 3, "bien", 4.0),
    createData('Name', "firstName", 2, "bof", 2.0),
    createData('Name', "firstName", 4, "super", 6.0),
    createData('Name', "firstName", 1, "nul", 0.5),
    createData('Name', "firstName", 10, "neutre", 8.0),
];

const GameEmployeesPage: FC<{}> = ({}) => {

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
                            <PeopleIcon className={"icon"}/>
                            <h3>Salariés</h3>
                        </div>

                            <Table sx={{minWidth: 650,background: "#219EBC"}} aria-label="simple table" >
                                <TableHead className={"employees-table"}>
                                <TableRow>
                                        <TableCell>Nom</TableCell>
                                        <TableCell align="right">Prénom</TableCell>
                                        <TableCell align="right">Niveau</TableCell>
                                        <TableCell align="right">Humeur</TableCell>
                                        <TableCell align="right">Productivitée</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.firstname}</TableCell>
                                            <TableCell align="right">{row.niveau}</TableCell>
                                            <TableCell align="right">{row.mood}</TableCell>
                                            <TableCell align="right">{row.productivity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        <RecuiteButton/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default GameEmployeesPage;