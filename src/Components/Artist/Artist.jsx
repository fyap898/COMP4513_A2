import ArtistList from "./ArtistList";
import ArtistInfo from "./ArtistInfo";
import ArtistPaintingList from "./ArtistPaintingList";
import PaintingInfo from "../Painting/PaintingInfo";
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
            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg overflow-hidden flex flex-col">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Artist Names</h3>
                <p className="text-sm text-gray-300">(Last Name, First Name)</p>
                <p className="text-sm text-gray-300">sorted by last name</p>
                <div className="overflow-y-auto flex-1 pr-1 max-h-[600px]">
                    <ArtistList artists={props.artists} populateInfo={setSelectedArtist}/>
                </div>
            </section>

            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg self-start">
                <h3 className="text-lg font-semibold text-[#0A171A]">Artist Info</h3>
                <ArtistInfo artist={selectedArtist} />
            </section>
            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for Selected Artist</h3>
                {selectedArtist ? 
                    (<ArtistPaintingList paintings={props.paintings} artist={selectedArtist} galleries={props.galleries} genres={props.genres} learnMore={setSelectedPainting}/>) 
                    : (<p className="text-white mt-4">Please select an artist to view their paintings.</p>)}
            </section>

            {selectedPainting && <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} onClose={() => setSelectedPainting(null)}/>}
        </main>
    );
}

export default Artist;

// painting list and modal dialog