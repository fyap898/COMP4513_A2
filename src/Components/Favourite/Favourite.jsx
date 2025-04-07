import PaintingInfo from "../Painting/PaintingInfo";
import FavouriteArtist from "./FavouriteArtist";
import FavouriteGallery from "./FavouriteGallery";
import FavouriteManip from "./FavouriteManip";
import FavouriteNav from "./FavouriteNav";
import FavouritePainting from "./FavouritePainting";
import GalleryModal from "../GalleryModal";
import ArtistModal from "../ArtistModal";
import {useState, useEffect} from 'react';

const Favourite = (props) => {

    const [currentTab, setCurrentTab] = useState('gallery'); // there is only 3 tabs: gallery, artist, painting
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [selectedGallery, setSelectedGallery] = useState(null);

    const [selectedRemovePainting, setSelectedRemovePainting] = useState(null);
    const [selectedRemoveArtist, setSelectedRemoveArtist] = useState(null);
    const [selectedRemoveGallery, setSelectedRemoveGallery] = useState(null)

    //Effect when modal dialog pops up
    useEffect(() => {
        const body = document.body;
    
        if (selectedPainting) {
          // Dim the background and prevent scroll when popup is active
          body.className = "bg-[#A0BBBF] overflow-hidden";
        } else {
          // Reset body styles
          body.className = "bg-[#A0BBBF]";
        }
    }, [selectedPainting]);

    //Removal confirmation for all three category
    useEffect(() => {
        if (selectedRemoveGallery) {
            const confirmRemove = window.confirm(
              `Are you sure you want to remove "${selectedRemoveGallery.galleryName}" from favourites?`
            );
        
            if (confirmRemove) {
              props.setFavGal(prev => prev.filter(g => g.galleryId !== selectedRemoveGallery.galleryId));
            }
        
            // Clear selection no matter what
            setSelectedRemoveGallery(null);
        }
    }, [selectedRemoveGallery]);

    useEffect(() => {
        if (selectedRemoveArtist) {
            const name = selectedRemoveArtist ? `${selectedRemoveArtist?.firstName} ` + `${selectedRemoveArtist.lastName}` : "N/A";
            const confirmRemove = window.confirm(
              `Are you sure you want to remove "${name}" from favourites?`
            );
        
            if (confirmRemove) {
              props.setFavArt(prev => prev.filter(a => a.artistId !== selectedRemoveArtist.artistId));
            }
        
            // Clear selection no matter what
            setSelectedRemoveArtist(null);
        }
    }, [selectedRemoveArtist]);

    useEffect(() => {
        if (selectedRemovePainting) {
            const confirmRemove = window.confirm(
              `Are you sure you want to remove "${selectedRemovePainting.title}" from favourites?`
            );
        
            if (confirmRemove) {
              props.setFavPainting(prev => prev.filter(p => p.paintingId !== selectedRemovePainting.paintingId));
            }
        
            // Clear selection no matter what
            setSelectedRemovePainting(null);
        }
    }, [selectedRemovePainting]);

    return(
        <>
        <main className="fixed inset-0 bg-[#A0BBBF] flex items-center justify-center z-40">
            <section className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-4xl h-[80vh] relative top-12 flex flex-col justify-start pointer-events-auto">
                <div className="flex justify-between items-center pb-4">
                <div>
                    <p className="text-sm text-[#3D5C64] text-left">
                    Sorted by earliest added
                    </p>
                </div>
                <FavouriteManip emptyFav={props.emptyFav} />
                </div>

                <FavouriteNav currentTab={currentTab} setCurrentTab={setCurrentTab} />

                <div className="p-6 bg-white rounded-b-lg shadow-md">
                {currentTab === "gallery" && (
                    <FavouriteGallery favGal={props.favGal} learnMore={setSelectedGallery} remove={setSelectedRemoveGallery}/>
                )}
                {currentTab === "artist" && (
                    <FavouriteArtist favArt={props.favArt} learnMore={setSelectedArtist} remove={setSelectedRemoveArtist}/>
                )}
                {currentTab === "painting" && (
                    <FavouritePainting favPainting={props.favPainting} learnMore={setSelectedPainting} remove={setSelectedRemovePainting}/>
                )}
                </div>
            </section>

        </main>
            {selectedPainting && (
                <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} favPainting={props.favPainting} onClose={() => setSelectedPainting(null)} onFav={() => props.addPainting((prev) => [...prev, selectedPainting])}/>
            )}

            {selectedGallery && (
                <GalleryModal gallery={selectedGallery} key={selectedGallery.galleryId} onClose={() => setSelectedGallery(null)}/>
            )}

            {selectedArtist && (
                <ArtistModal artist={selectedArtist} key={selectedArtist.artistId} onClose={() => setSelectedArtist(null)}/>
            )}
        </>
    );
}

export default Favourite;

//body when pop-up (overflow-hidden, pointer-event-none)
//query id add "hidden"

//use useRef and useEffect to persist scroll position