import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Booking = ({ product }) => {
    const { title, price } = product;
    // Declare context to show user info
    const { user } = useContext(AuthContext);

    // Declare event handler
    const handleBooking = event => {
        // Stop reload the page
        event.preventDefault();

        // Define Form from event.target
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const title = form.title.value;
        const price = form.price.value;

        console.log(name, email, phone, location, title, price);

        // Declare object to send form data
        const booking = {
            name,
            email,
            phone,
            location,
            title,
            price
        }

        // Declare fetch to get data & send data to the server using POST method by the body
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // If data sets properly (acknowledged is true), close modal & show toast
                if (data.acknowledged) {
                    toast.success('Successfully Booked');
                }
                // Display message for limit booking
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            {/* Modal Format */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* Close Modal */}
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    {/* Create Form */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        {/* Name set dynamically */}
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        {/* Email set dynamically */}
                        <input name="email" type="email" defaultValue={user?.email} disabled readOnly placeholder="Email" className="input input-bordered w-full" />
                        {/* Phone */}
                        <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" />
                        {/* Location */}
                        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" />
                        {/* Product name */}
                        <input name='title' type="text" value={title} disabled className="input input-bordered w-full" />
                        {/* Product price */}
                        <input name='price' type="text" value={price} disabled className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;