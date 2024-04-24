// Button.js or Button.jsx
function Button({ onClick, children, className, ...restProps }) {
    return (
        <button
            onClick={onClick}
            className={`p-3 bg-accent-dark hover:bg-accent-dark/70 text-accent-light ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default Button;
