import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
        navigate('/home');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
            <input
                type="text"
                name="name"
                placeholder="Name"
                {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input
                type="date"
                name="bookingDate"
                placeholder="Booking date"
                {...register('bookingDate', { required: 'Booking date is required' })}
            />
            {errors.bookingDate && <p className="error-message">{errors.bookingDate.message}</p>}

            <textarea
                name="comment"
                placeholder="Comment"
                {...register('comment')}
            ></textarea>

            <button type="submit" className="booking-button">Send</button>
        </form>
    );
};

export { BookingForm };