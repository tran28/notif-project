export function createClickHandler(actionMap) {
    // Function to handle actions
    const handleClick = (path) => {
        // Check if the path exists in the action map
        if (actionMap[path]) {
            // Execute the action associated with the path
            actionMap[path]();
        } else {
            // Handle cases where the path is not found in the action map
            console.warn(`Warning from useClickHandler(): No action defined.`);
        }
    };

    return handleClick;
}
