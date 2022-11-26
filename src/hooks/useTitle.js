import { useEffect } from "react";

// Declare useTitle function with title param
const useTitle = title => {
    // Make external connection using useEffect
    useEffect(() => {
        // Change the title in the html dynamically
        document.title = `${title} - Swaplap`;
    }, [])
};

// Export useTitle by default
export default useTitle;