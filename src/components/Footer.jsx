function Footer(){
    const year = new Date().getFullYear()
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <h6 className="text-lg">© Qlex {year}</h6>
        </footer>
    )
}

export default Footer