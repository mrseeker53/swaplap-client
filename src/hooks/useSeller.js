import { useEffect, useState } from "react"

// Declare useSeller function with email
const useSeller = email => {
    // Declare state to set seller
    const [isSeller, setIsSeller] = useState(false);
    // Declare state to set loader
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            // Call the fetch to send a request for seller email to the server & get a response with data
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Set the state
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                });
        }
        // Set dependency
    }, [email]);
    // return isAdmin as an array to use this hook
    return [isSeller, isSellerLoading];
}

// export the hook
export default useSeller;