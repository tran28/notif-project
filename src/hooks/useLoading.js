import { useState, useCallback } from 'react';

/**
 * useLoading - A custom hook for managing loading states in React components.
 *
 * Returns an object with the loading state and functions to start and stop loading.
 */
function useLoading() {
    const [isLoading, setIsLoading] = useState(false);

    // Function to start loading
    const startLoading = useCallback(() => setIsLoading(true), []);

    // Function to stop loading
    const stopLoading = useCallback(() => setIsLoading(false), []);

    return { isLoading, startLoading, stopLoading };
}

export default useLoading;
