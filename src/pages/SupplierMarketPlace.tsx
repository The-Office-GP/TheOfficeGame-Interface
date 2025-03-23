import {FC} from 'react';
import "../styles/OfficeBackground.css"
import Header from "../components/Header.tsx";
import ExitButton from "../components/buttons/global-buttons/ExitButton.tsx";
import Footer from "../components/Footer.tsx";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupplierMarketPlaceButtons from "../components/buttons/supplier-buttons/SupplierMarketPlaceButtons.tsx";

import '../styles/components/containers/SupplierMarketplace.css'

const SupplierMarketPlace: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <div className={"menu-container"}>
                    <div className={"exit-buttons-container"}>
                        <ExitButton/>
                        <h3>Qualité de la matière première</h3>
                        <SupplierMarketPlaceButtons/>
                    </div>
                    <div className={"display"}>
                        <div className={"icon-title"}>
                            <StorefrontIcon className={"icon"}/>
                            <h3>Fournisseur</h3>
                        </div>
                        <div className={"supplier-infos"}>
                            <p>Nom du fournisseur : supplierNameValue</p>
                            <p>Nom du produit : productName</p>
                            <p>Qualité du produit: qualityValue</p>
                            <p>Prix : productPrice</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SupplierMarketPlace;