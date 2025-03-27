const FavGalItem = () => {
    return(
        <li className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-700 text-left">Gallery Name 1</h4>
            <p className="text-sm text-gray-500 text-left">Description of this genre. It is coy used in...</p>
            <p className="text-sm text-gray-500 text-left">Description of this genre</p>
            <div className="mt-2 flex justify-between">
                <a href="#" className="text-blue-500 hover:underline text-sm">More Info</a>
                <button className="text-red-500 hover:text-red-700 text-sm">Remove</button>
            </div>
        </li>
    );
}

export default FavGalItem;