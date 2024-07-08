import React from 'react';
import { useForm } from 'react-hook-form';
import './FiltersForm.css';

const FiltersForm = ({ filterCampers }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        filterCampers(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="location-input">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="City" {...register('location')} />
            </div>
            <div className="vehicle-equipment">
                <h3>Vehicle equipment</h3>
                <hr/>
                <div className="equipment-options">
                    {['AC', 'Automatic', 'Kitchen', 'TV', 'Shower/WC'].map((equipment) => (
                        <label key={equipment} className="option">
                            <input type="checkbox" {...register('details.' + equipment.toLowerCase())} />
                            {equipment}
                        </label>
                    ))}
                </div>
            </div>
            <div className="vehicle-type">
                <h3>Vehicle type</h3>
                <hr/>
                <div className="type-options">
                    {['Van', 'Fully Integrated', 'Alcove'].map((type) => (
                        <label key={type} className="option">
                            <input type="radio" {...register('form')} value={type.toLowerCase()} />
                            {type}
                        </label>
                    ))}
                </div>
            </div>
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export { FiltersForm };