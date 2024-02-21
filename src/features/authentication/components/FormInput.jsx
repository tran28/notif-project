function FormInput({ label, type, name, placeholder, value, onChange, error }) {
    return (
        <div className="mb-5">
            <label htmlFor={name} className="text-sm font-light">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                className="text-sm w-full p-3 bg-accent-aman border-2 border-accent-gray mt-2 focus:border-accent-dark focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="py-1 text-xs font-light text-error">{error}</div>}
        </div>
    );
}

export default FormInput;
