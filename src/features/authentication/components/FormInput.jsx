function FormInput({ label, type, name, placeholder, value, onChange, error }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-sm font-light">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                className="text-base p-3 bg-accent-light border-2 border-accent-mid focus:border-accent-dark focus:outline-none sm:text-sm placeholder-accent-dark/50"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="text-xs font-light text-error">{error}</div>}
        </div>
    );
}

export default FormInput;
