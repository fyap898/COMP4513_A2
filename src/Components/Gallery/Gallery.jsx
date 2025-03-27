import GalleryInfo from "./GalleryInfo";
import GalleryList from "./GalleryList";
import GalleryPainting from "./GalleryPainting";

const Gallery = () => {
    return(
        <main className="grid grid-cols-[2fr_3fr_5fr] gap-4 mt-24 p-8 bg-[#DAE2DF]">
            <section className="shadow-md p-4 rounded-lg bg-[#A0BBBF]">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Gallery Names</h3>
                <p className="text-sm text-gray-600 text-[#3D5C64]">Sorted by name</p>
                <GalleryList/>
            </section>
            <section className="shadow-md p-4 rounded-lg text-left bg-[#A0BBBF]">
              <h3 className="text-lg font-semibold text-[#0A171A]">Gallery Info</h3>
              <GalleryInfo/>
          </section>
          <section className="shadow-md p-4 rounded-lg bg-[#A0BBBF]">
              <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for the Gallery</h3>
              <p className="text-sm text-gray-600 text-[#3D5C64]">Sorted by title</p>
              <GalleryPainting/>
            </section>
        </main>
    );
}

export default Gallery;