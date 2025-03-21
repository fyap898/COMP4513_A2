import FavouriteManip from "./FavouriteManip";
import FavouriteNav from "./FavouriteNav";

const Favourite = () => {
    return(
        <div id="favorites-modal" class="fixed inset-0 backdrop-blur-md flex items-center justify-center ">
            <main class="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-5xl">
                <div class="flex justify-between items-center pb-4">
                    <h2 class="text-xl font-semibold">Favorites</h2>
                    <FavouriteManip/>
                </div>

                <FavouriteNav/>

                <section class="p-6 bg-white rounded-b-lg shadow-md">
                    <div id="content-genre" class="tab-content">
                        <h3 class="text-lg font-semibold mb-4">Favorite Genres</h3>
                        <div class="p-6 h-40 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg shadow-sm">
                            Genre names
                        </div>
                    </div>

                    <div id="content-artist" class="tab-content hidden">
                        <h3 class="text-lg font-semibold mb-4">Favorite Artists</h3>
                        <div class="p-6 h-40 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg shadow-sm">
                            Artist names
                        </div>
                    </div>

                    <div id="content-painting" class="tab-content hidden">
                        <h3 class="text-lg font-semibold mb-4">Favorite Paintings</h3>
                        <div class="p-6 h-40 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg shadow-sm">
                            Painting titles
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Favourite;