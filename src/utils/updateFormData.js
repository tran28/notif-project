export function updateFormData(formData, event) {
    const { name, value } = event.target;
    return {
        ...formData,
        [name]: value,
    };
}