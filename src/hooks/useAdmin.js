import { useEffect, useState } from "react"

// Declare useAdmin function with email
const useAdmin = email => {
    // Declare state to set admin
    const [isAdmin, setIsAdmin] = useState(false);
    // Declare state to set loader
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            // Call the fetch to send a request for admin email to the server & get a response with data
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Set the state
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
        // Set dependency
    }, [email]);
    // return isAdmin as an array to use this hook
    return [isAdmin, isAdminLoading];
}

// export the hook
export default useAdmin;