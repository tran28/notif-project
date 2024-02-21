// Button.js or Button.jsx
function Button({ onClick, children, className, ...restProps }) {
    return (
        <button
            onClick={onClick}
            className={`p-3 bg-accent-gray hover:bg-accent-dark hover:text-accent-aman ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default Button;
