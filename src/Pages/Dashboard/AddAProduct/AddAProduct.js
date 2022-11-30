import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddAProduct = () => {
    // Dynamic title using hook
    useTitle('Add A Product');

    // Declare event handler
    const handleAddProduct = event => {
        // Stop reload the page
        event.preventDefault();

        // Define Form from event.target
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;
        const condition = form.condition.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const useYear = form.useYear.value;
        const description = form.description.value;
        const phone = form.phone.value;
        const status = form.status.value;
        const img = form.img.value;

        console.log(title, location, condition, price, originalPrice, useYear, description, phone, status, img);

        // Declare object to send form data
        const product = {
            title,
            location,
            condition,
            price,
            originalPrice,
            useYear,
            description,
            phone,
            status,
            img
        }

        // Declare fetch to get data & send data to the server using POST method by the body
        fetch('http://localhost:5000/dashboard/myproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // If data sets properly (acknowledged is true), close modal & show toast
                if (data.acknowledged) {
                    toast.success('Product Added Successfully');
                }
                // Display message for limit booking
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Add A Product</h2>

            {/* Create Form */}
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>
                {/* Product Name */}
                <input name="title" type="text" placeholder="Product Name" className="input input-bordered w-full" />
                {/* Location */}
                <input name="location" type="text" placeholder="Your Location" className="input input-bordered w-full" />
                {/* Product Condition */}
                <select name='condition' className="select select-bordered w-full">
                    <option defaultValue value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                </select>
                {/* Price */}
                <input name="price" type="text" placeholder="Resale Price" className="input input-bordered w-full" />
                {/* Original Price */}
                <input name="originalPrice" type="text" placeholder="Original Price" className="input input-bordered w-full" />
                {/* Year of Purchase */}
                <input name="useYear" type="text" placeholder="Year of Purchase" className="input input-bordered w-full" />
                {/* Description */}
                <input name="description" type="text" placeholder="Details About Product" className="input input-bordered w-full" />
                {/* Phone */}
                <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                {/* Status */}
                <input name="status" type="text" placeholder="Product Availability" className="input input-bordered w-full" />
                {/* Category Id */}
                <select name='categoryId' className="select select-bordered w-full">
                    <option defaultValue value="1">ASUS</option>
                    <option value="2">DELL</option>
                    <option value="3">HP</option>
                </select>
                {/* File */}
                <input name="img" type="file" className="input input-bordered w-full" />
                <br />
                <input className='btn btn-primary w-full' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;