import React from 'react';
import { Card } from "./Card";
import { useSelector } from "react-redux";
import {RedHeartIcon} from "../icons";

const FavoritesCards = () => {
    const campers = useSelector((state) => state.campers.campers);
    const favorites = useSelector((state) => state.favorites.favorites);

    const favoriteCampers = campers.filter(camper => favorites[camper._id]);
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}><RedHeartIcon/>FAVORITES CAMPERS<RedHeartIcon/></h1>
            {favoriteCampers.length > 0 ? (
                favoriteCampers.map(card => (
                    <Card card={card} key={card._id} />
                ))
            ) : (
                <p style={{fontSize: '24px',textAlign:'center'}}>No favorites yet.</p>
            )}
        </div>
    );
};

export { FavoritesCards };