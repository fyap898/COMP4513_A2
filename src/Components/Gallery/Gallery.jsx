// File Name: Gallery
// Purpose: Components for display galleries' data
// Detail: This components renders Gallery page which consist section such as
//          Gallery List, Gallery Info and Gallery Painting List. Users will
//          have to select a gallery to view one's information and paintings.
//          Users will be able to view details of the painting and add both gallery
//          and painting to favourite list.

import GalleryInfo from "./GalleryInfo";
import GalleryList from "./GalleryList";
import GalleryPaintingList from "./GalleryPaintingList";
import PaintingInfo from "../PopUp/PaintingInfo";
import {useState, useEffect} from 'react';

const Gallery = (props) => {

    const [selectedGallery, setSelectedGallery] = useState(null);
    useEffect(() => {
        if (!selectedGallery) return;
        console.log("Selected gallery:", selectedGallery.galleryName);
      
      }, [selectedGallery]);

    // For single painting modal dialog
    const [selectedPainting, setSelectedPainting] = useState(null);
    useEffect(() => {
        const body = document.body;

        if (selectedPainting) {
            // Dim the background and prevent scroll when popup is active
            body.className = "bg-[#A0BBBF] overflow-hidden";
            console.log(selectedPainting.title);
        } else {
            // Reset body styles
            body.className = "bg-[#A0BBBF]";
        }
    }, [selectedPainting]);

    return(
        <main className="grid grid-cols-[2fr_3fr_5fr] gap-4 mt-24 p-8 bg-[#DAE2DF]">
            <section className="shadow-md p-4 rounded-lg bg-[#A0BBBF] overflow-hidden flex flex-col">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Gallery Names</h3>
                <p className="text-sm text-gray-600 text-[#3D5C64]">Sorted by name</p>
                <div className="overflow-y-auto flex-1 pr-1 max-h-[650px]">
                    <GalleryList galleries={props.galleries} populateInfo={setSelectedGallery} />
                </div>
            </section>

            <section className="shadow-md p-4 rounded-lg text-left bg-[#A0BBBF]">
              <h3 className="text-lg font-semibold text-[#0A171A]">Gallery Info</h3>
              {selectedGallery ? 
                        (<GalleryInfo gallery={selectedGallery} favGal={props.favGal} onFav={() => props.addGal(prev => [...prev, selectedGallery])}/>)
                        : (<p className="text-white mt-4">Please select a gallery to view their info.</p>)}
            </section>
            
            <section className="shadow-md p-4 rounded-lg bg-[#A0BBBF]">
              <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for the Gallery</h3>
              <p className="text-sm text-gray-600 text-[#3D5C64]">Sorted by title</p>
              {selectedGallery ? 
                    (<div className="overflow-y-auto pr-1 max-h-[650px] mt-2">
                        <GalleryPaintingList paintings={props.paintings} gallery={selectedGallery} learnMore={setSelectedPainting}/>
                    </div>) 
                    : (<p className="text-white mt-4">Please select a gallery to view their paintings.</p>)}
            </section>

            {selectedPainting && <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} 
                                                favPainting={props.favPainting} onClose={() => setSelectedPainting(null)} 
                                                onFav={() => props.addPainting(prev => [...prev, selectedPainting])}/>}
            
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-[#0A171A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#3D5C64] transition z-50">
            ↑ Top
            </button>
        </main>
    );
}

export default Gallery;