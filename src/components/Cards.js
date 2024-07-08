import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { camperActions } from '../store/slices/camperSlice';
import { Card } from './Card';
import { Loader } from '../Loader/Loader';
import './Cards.css';
import { FiltersForm } from "./FiltersForm";

const Cards = () => {
    const { campers, loading } = useSelector((state) => state.campers);
    const dispatch = useDispatch();
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        dispatch(camperActions.getAll());
    }, [dispatch]);

    useEffect(() => {
        setFilteredCampers(campers);
    }, [campers]);

    const filterCampers = (filters) => {
        let filtered = campers;

        if (filters.location) {
            filtered = filtered.filter(camper => camper.location.toLowerCase().includes(filters.location.toLowerCase()));
        }

        if (filters.details) {
            filtered = filtered.filter(camper => {
                return Object.keys(filters.details).every(key => {
                    if (filters.details[key]) {
                        return camper.details[key.toLowerCase()] === 1;
                    }
                    return true;
                });
            });
        }

        if (filters.form) {
            filtered = filtered.filter(camper => camper.form.toLowerCase() === filters.form.toLowerCase());
        }

        setFilteredCampers(filtered);
        setShowMore(false);
    };

    const handleShowMore = () => {
        setShowMore(true);
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <FiltersForm filterCampers={filterCampers} />
            </div>
            <div className='cards-container'>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {filteredCampers.slice(0, showMore ? filteredCampers.length : 4).map((card) => (
                            <Card card={card} key={card._id} />
                        ))}
                        {!showMore && filteredCampers.length > 4 && (
                            <button onClick={handleShowMore} className='load-more'>Load More</button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export { Cards };