import { useEffect, useState } from "react"

// Declare useBuyer function with email
const useBuyer = email => {
    // Declare state to set buyer
    const [isBuyer, setIsBuyer] = useState(false);
    // Declare state to set loader
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            // Call the fetch to send a request for buyer email to the server & get a response with data
            fetch(`https://swaplap-server-mrseeker53.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Set the state
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                });
        }
        // Set dependency
    }, [email]);
    // return isAdmin as an array to use this hook
    return [isBuyer, isBuyerLoading];
}

// export the hook
export default useBuyer;