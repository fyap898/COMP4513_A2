// File Name: Artist
// Purpose: Components for display artists' data
// Detail: This component renders Artist page which consists sections such as
//          Artist List, Artist Info and Artist Painting List. Users will have 
//          to select an artist to view one's information and paintings. Users
//          will be able to view details of the painting and add to favourite list.
// 

import ArtistList from "./ArtistList";
import ArtistInfo from "./ArtistInfo";
import ArtistPaintingList from "./ArtistPaintingList";
import PaintingInfo from "../PopUp/PaintingInfo";
import {useState, useEffect} from 'react';

const Artist = (props) => {

    const[selectedArtist, setSelectedArtist] = useState(null);

    // For single painting modal dialog
    const [selectedPainting, setSelectedPainting] = useState(null);
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

    return(
        <main className="grid grid-cols-[2fr_3fr_5fr] gap-4 mt-24 p-8 bg-[#DAE2DF]">
            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg overflow-hidden flex flex-col self-start">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Artist Names</h3>
                <p className="text-sm text-gray-300">(Last Name, First Name)</p>
                <p className="text-sm text-gray-300">sorted by last name</p>
                <div className="overflow-y-auto flex-1 pr-1 max-h-[500px]">
                    <ArtistList artists={props.artists} populateInfo={setSelectedArtist}/>
                </div>
            </section>

            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0A171A]">Artist Info</h3>
                {selectedArtist ?
                    (<div className="pr-1 max-h=[750px] mt-2">
                        <ArtistInfo artist={selectedArtist} favArt={props.favArt} onFav={() => props.addArt(prev => [...prev, selectedArtist])}/>
                    </div>)
                    :(<p className="text-white mt-4">Please select an artist to view their info.</p>)}
            </section>
            
            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg self-start min-h-[600px]">
                <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for Selected Artist</h3>
                {selectedArtist ? 
                    (<div className="overflow-y-auto pr-1 mt-2">
                        <ArtistPaintingList paintings={props.paintings} artist={selectedArtist} galleries={props.galleries} 
                                            genres={props.genres} learnMore={setSelectedPainting}/>
                    </div>) 
                    : (<p className="text-white mt-4">Please select an artist to view their paintings.</p>)}
            </section>

            {selectedPainting && <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} 
                                                favPainting={props.favPainting} onClose={() => setSelectedPainting(null)} 
                                                onFav={() => props.addPainting(prev => [...prev, selectedPainting])}/>}

            {/* Button to return page to top */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-[#0A171A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#3D5C64] transition z-50">
            ↑ Top
            </button>
        </main>
    );
}

export default Artist;
