import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(Math.min(window.innerWidth, 1536));

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(Math.min(window.innerWidth, 1536));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}

export default useWindowWidth;