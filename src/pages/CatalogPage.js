import React from 'react';
import { Cards } from "../components/Cards";
import './CatalogPage.css';


const CatalogPage = () => {
    return (
        <div className="catalog-container">
            <Cards />
        </div>
    );
};

export { CatalogPage };
