
function Button({type, color, children, action}) {
    const colorVariants = {
        blue: 'bg-blue-600 hover:bg-blue-500 text-white',
        red: 'bg-red-500 hover:bg-red-400 text-white',
        yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }

    return (
        <button
            type ={type}
            className={`${colorVariants[color]} px-3 py-1 rounded`}
        >
            {children}
        </button>
    )
}

export default Button