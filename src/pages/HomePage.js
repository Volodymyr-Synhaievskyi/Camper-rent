// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <div className="description">
                <h1>Welcome to Card World</h1>
                <p>
                    Discover the best campers available for your next adventure. Whether you're planning a weekend getaway or a cross-country trip, our selection of top-notch campers will meet all your needs. Enjoy the freedom of the open road with comfort and style.
                </p>
            </div>
            <div className="banner">
                <img src="https://nucamprv.com/app/uploads/2023/11/Homepage-Header-TAB-2024.jpg" alt="Card" className="banner-image" />
                <div className="banner-content">
    <h1>Explore Our Campers</h1>
    <div className="flex">
        <button onClick={() => navigate('/catalog')} className="banner-button button-spacing">View Catalog</button>
    <button onClick={() => navigate('/favorites')} className="banner-button button-spacing">View Your Favorites</button>
    </div>
</div>

                </div>
            <div className="services">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Wide Selection of Campers</h3>
                        <p>
                            Choose from a variety of campers to suit your needs, from compact models perfect for couples to spacious options for families.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Flexible Rental Periods</h3>
                        <p>
                            Whether you need a camper for a weekend or a month, we offer flexible rental periods to accommodate your travel plans.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Comprehensive Insurance</h3>
                        <p>
                            Travel with peace of mind knowing that all our rentals include comprehensive insurance coverage.
                        </p>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>
                            "Our trip was fantastic! The camper was well-equipped and very comfortable. We will definitely rent from Card World again."
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <p>
                            "Excellent service and great selection. The rental process was smooth, and the staff was very helpful. Highly recommend!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HomePage };