/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Card.css';
import { favoriteActions } from "../store/slices/favoriteSlice";
import { ACIcon, AdultIcon, AutomaticIcon, BedIcon, HeartIcon, KitchenIcon, LocationIcon, PetrolIcon, RedHeartIcon, StarIcon } from "../icons";
import { Modal } from "./Modal";

const Card = ({ card }) => {
    const { _id, name, price, rating, location, adults, reviews, description, engine, details = {}, gallery, transmission } = card;
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favorites.favorites[_id]);
    const [showModal, setShowModal] = useState(false);

    const handleFavoriteClick = () => {
        dispatch(favoriteActions.toggleFavorite({ id: _id }));
    };

    const handleShowMoreClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card">
            <img
                src={gallery[0]}
                alt={name}
                className="card-image"
            />
            <div className="card-content">
                <div className="card-header">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-price-heart card-price-heart-align">
                        <span className="card-price">€{price}</span>
                        <button className="heart-button" onClick={handleFavoriteClick}>
                            {isFavorite ? <RedHeartIcon /> : <HeartIcon />}
                        </button>
                    </div>
                </div>
                <div className="card-details">
                    <div className="card-rating-location">
                        <div className="card-rating">
                            <StarIcon />
                            <a href="#">{rating} ({reviews.length} Reviews)</a>
                        </div>
                        <div className="card-location">
                            <LocationIcon/> {location}
                        </div>
                    </div>
                </div>
                <p className="card-description">
                    {description.length > 55 ? `${description.substring(0, 55)}...` : description}
                </p>
                <div className="card-features">
                    <span><AdultIcon />{adults} adults</span>
                    <span><AutomaticIcon />{transmission}</span>
                    <span><PetrolIcon />{engine}</span>
                    {details.kitchen && <span><KitchenIcon />Kitchen</span>}
                    <span><BedIcon />{details.beds} beds</span>
                    {details.airConditioner && <span><ACIcon />AC</span>}
                </div>
                <button className="card-button" onClick={handleShowMoreClick}>Show more</button>
            </div>
            <Modal show={showModal} onClose={handleCloseModal} card={card} />
        </div>
    );
};

export { Card };