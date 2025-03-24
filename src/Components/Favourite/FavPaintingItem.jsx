const FavPaintingItem = () => {
    return(
        <li class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h4 class="text-lg font-semibold text-gray-700 text-left">Painting Name 1</h4>
            <p class="text-sm text-gray-500 text-left">Description of this paint. It is commonly used in...</p>
            <p class="text-sm text-gray-500 text-left">Description of this artist</p>
            <div class="mt-2 flex justify-between">
                <a href="#" class="text-blue-500 hover:underline text-sm">More Info</a>
                <button class="text-red-500 hover:text-red-700 text-sm">Remove</button>
            </div>
        </li>
    );
}

export default FavPaintingItem;