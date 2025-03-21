import GalleryInfo from "./GalleryInfo";
import GalleryList from "./GalleryList";
import GalleryPainting from "./GalleryPainting";

const Gallery = () => {
    return(
        <main class="grid grid-cols-[2fr_3fr_5fr] gap-4 mt-24 p-8">
            <section class="bg-white shadow-md p-4 rounded-lg">
                <h3 class="text-lg font-semibold">List of Gallery Names</h3>
                <p class="text-sm text-gray-600">Sorted by name</p>
                <GalleryList/>
            </section>
            <section class="bg-white shadow-md p-4 rounded-lg text-left">
              <h3 class="text-lg font-semibold">Gallery Info</h3>
              <GalleryInfo/>
          </section>
          <section class="bg-white shadow-md p-4 rounded-lg">
              <h3 class="text-lg font-semibold">Paintings for the Gallery</h3>
              <p class="text-sm text-gray-600">Sorted by title</p>
              <GalleryPainting/>
            </section>
        </main>
    );
}

export default Gallery;