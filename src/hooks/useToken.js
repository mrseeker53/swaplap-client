import { useEffect, useState } from "react";

// Declare useToken function with email
const useToken = email => {
    // Declare state to set token
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            // Call the fetch to send a request for token to the server & get a response with token
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // If the token is found, set the token to the local storage & state
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    // return token as an array to use this hook
    return [token];
}

// Export the hook
export default useToken;