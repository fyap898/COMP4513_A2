import FavouriteArtist from "./FavouriteArtist";
import FavouriteGallery from "./FavouriteGallery";
import FavouriteManip from "./FavouriteManip";
import FavouriteNav from "./FavouriteNav";
import FavouritePainting from "./FavouritePainting";

const Favourite = () => {
    return(
        <div id="favorites-modal" class="fixed inset-0 backdrop-blur-md flex items-center justify-center pointer-events-none hidden">
            <main class="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-4xl h-auto max-h-[80vh] pointer-events-auto relative top-12">
                <div class="flex justify-between items-center pb-4">
                    <h2 class="text-xl font-semibold">Favourites</h2>
                    <FavouriteManip/>
                </div>

                <FavouriteNav/>

                <section class="p-6 bg-white rounded-b-lg shadow-md">
                    
                        <FavouriteGallery/>
                    
                        <FavouriteArtist/>
                    
                        <FavouritePainting/>
                </section>
            </main>
        </div>
    );
}

export default Favourite;

//body when pop-up (overflow-hidden, pointer-event-none)
//query id add "hidden"

//use useRef and useEffect to persist scroll position