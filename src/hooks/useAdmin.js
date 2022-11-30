import { useEffect, useState } from "react"

// Declare useAdmin function with role
const useAdmin = role => {
    // Declare state to set admin
    const [isAdmin, setIsAdmin] = useState(false);
    // Declare state to set loader
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (role) {
            // Call the fetch to send a request for admin role to the server & get a response with data
            fetch(`http://localhost:5000/users/admin/${role}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Set the state
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
        // Set dependency
    }, [role]);
    // return isAdmin as an array to use this hook
    return [isAdmin, isAdminLoading];
}

// export the hook
export default useAdmin;