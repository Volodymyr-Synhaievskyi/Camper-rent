import React, { useEffect, useState } from 'react';
import './Modal.css';
import {
    StarIcon, LocationIcon, AdultIcon, AutomaticIcon, PetrolIcon, KitchenIcon, BedIcon,
    ACIcon
} from '../icons'; // Make sure to import the necessary icons
import { BookingForm } from '../BookingForm';

const Modal = ({ show, onClose, card }) => {
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    if (!show) return null;

    const {
        name, price, rating, location, gallery, description, reviews, engine,
        form, length, width, height, tank, consumption, adults, transmission, details = {}
    } = card || {};

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="modal-title">{name}</h2>
                <div className="modal-rating-location">
                    <div className="modal-rating">
                        <StarIcon />
                        <a href="#reviews">{rating} ({reviews?.length || 0} Reviews)</a>
                    </div>
                    <div className="modal-location">
                        <LocationIcon /> {location}
                    </div>
                </div>
                <span className="modal-price">€{price}</span>
                <div className="modal-gallery">
                    {gallery?.length > 0 ? gallery.map((image, index) => (
                        <img key={index} src={image} alt={`gallery-${index}`} className="modal-gallery-image" />
                    )) : <p>No images available.</p>}
                </div>
                <p className="modal-description">{description}</p>
                <div className="modal-tabs">
                    <button
                        className={`modal-tab ${activeTab === 'features' ? 'active' : ''}`}
                        onClick={() => setActiveTab('features')}
                    >
                        Features
                    </button>
                    <button
                        className={`modal-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>
                <div className="modal-body">
                    {activeTab === 'features' ? (
                        <div className="modal-features">
                            <div className="card-features">
                                <span><AdultIcon />{adults} adults</span>
                                <span><AutomaticIcon />{transmission}</span>
                                <span><PetrolIcon />{engine}</span>
                                {details.kitchen && <span><KitchenIcon />Kitchen</span>}
                                <span><BedIcon />{details.beds} beds</span>
                                {details.airConditioner && <span><ACIcon />AC</span>}
                                {details.bathroom && <span>Bathroom</span>}
                                {details.TV && <span>TV</span>}
                                {details.CD && <span>CD</span>}
                                {details.radio && <span>Radio</span>}
                                {details.shower && <span>Shower</span>}
                                {details.toilet && <span>Toilet</span>}
                                {details.freezer && <span>Freezer</span>}
                                {details.hob && <span>{details.hob} Hob</span>}
                                {details.microwave && <span>Microwave</span>}
                                <span>{details.gas}</span>
                                <span>{details.water}</span>
                            </div>
                            <div className="vehicle-details">
                                <h3>Vehicle details</h3>
                                <p>Form: {form}</p>
                                <p>Length: {length}</p>
                                <p>Width: {width}</p>
                                <p>Height: {height}</p>
                                <p>Tank: {tank}</p>
                                <p>Consumption: {consumption}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-reviews" id="reviews">
                            {reviews?.length > 0 ? reviews.map((review, index) => (
                                <div key={index} className="review-item">
                                    <p><strong>{review.reviewer_name}</strong> - {review.reviewer_rating} stars</p>
                                    <p>{review.comment}</p>
                                </div>
                            )) : <p>No reviews available.</p>}
                        </div>
                    )}
                    <div className="booking-form">
                        <h3>Book your campervan now</h3>
                        <p>Stay connected! We are always ready to help you.</p>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Modal };