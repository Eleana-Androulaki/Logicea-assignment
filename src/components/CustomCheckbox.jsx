const CustomCheckbox = ({label, handleChange, checked}) => {
    return (
        <div class="flex items-center justify-end p-5">
            <input 
                checked={checked} 
                type="checkbox"
                className="w-4 h-4 rounded"
                onChange={handleChange}
            />
            <label 
                class="ml-2 text-lg font-medium"
            >
                {label}
            </label>
        </div>
    )
}

export default CustomCheckbox;