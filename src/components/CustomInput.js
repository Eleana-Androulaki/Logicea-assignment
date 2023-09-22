const CustomInput = ({
    label,
    model,
    setModel,
    name,
    type = "text"
}) => {
    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label 
                className="
                    block 
                    uppercase 
                    tracking-wide 
                    text-primary 
                    text-xs 
                    font-bold 
                    mb-2
                " 
            >
                {label}
            </label>
            <input 
                className="
                appearance-none 
                block 
                w-full 
                bg-secondary
                text-primary 
                border 
                border-red-500 
                rounded py-3 
                px-4 mb-3 
                leading-tight 
                focus:outline-none
            " 
            type={type}
            value={model?.[name]}
            name={name}
            onChange={(e) => {
                const newModel = {...model}
                newModel[name] = e.target.value
                setModel(newModel)
            }}
        />
        </div>
    )
}

export default CustomInput;