const CustomButton = ({ classes, children, handleClick }) => {
    return (
        <button 
            className={'font-bold py-2 px-4 rounded ' + classes}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default CustomButton