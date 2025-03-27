import FavPaintingItem from "./FavPaintingItem";

const FavouritePainting = () => {
    return(
        <div id="content-painting" className="tab-content flex flex-col gap-2">
            <ul className="p-4 bg-gray-50 rounded-lg shadow-sm overflow-auto max-h-[55vh] w-full space-y-2">
                <li className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-700 text-left">Painting Name 1</h4>
                    <p className="text-sm text-gray-500 text-left">Description of this artist. It is commonly used in...</p>
                    <p className="text-sm text-gray-500 text-left">Description of this artist</p>
                    <div className="mt-2 flex justify-between">
                        <a href="#" className="text-blue-500 hover:underline text-sm">More Info</a>
                        <button className="text-red-500 hover:text-red-700 text-sm">Remove</button>
                    </div>
                </li>
                <FavPaintingItem/>
            </ul>
        </div>
    );
}
export default FavouritePainting;