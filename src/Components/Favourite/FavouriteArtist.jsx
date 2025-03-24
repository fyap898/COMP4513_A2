import FavArtItem from "./FavArtItem";

const FavouriteArtist = () => {
    return(
        <div id="content-artist" class="tab-content flex flex-col gap-2 hidden">
            <ul class="p-4 bg-gray-50 rounded-lg shadow-sm overflow-auto max-h-[55vh] w-full space-y-2">
                <li class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h4 class="text-lg font-semibold text-gray-700 text-left">Artist Name 1</h4>
                    <p class="text-sm text-gray-500 text-left">Description of this artist. It is commonly used in...</p>
                    <p class="text-sm text-gray-500 text-left">Description of this artist</p>
                    <div class="mt-2 flex justify-between">
                        <a href="#" class="text-blue-500 hover:underline text-sm">More Info</a>
                        <button class="text-red-500 hover:text-red-700 text-sm">Remove</button>
                    </div>
                </li>
                <FavArtItem/>
            </ul>
        </div>
    );
}

export default FavouriteArtist;