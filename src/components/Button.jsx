function Button({text, onClick}){
    return(
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button