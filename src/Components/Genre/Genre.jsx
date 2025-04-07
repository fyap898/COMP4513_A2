import PaintingInfo from "../Painting/PaintingInfo";
import GenreInfo from "./GenreInfo";
import GenreList from "./GenreList";
import GenrePainting from "./GenrePainting";
import {useState, useEffect} from 'react';

const Genre = (props) => {

    const [selectedGenre, setSelectedGenre] = useState(null);
    
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
        <main className="grid grid-cols-[2fr_8fr] gap-4 mt-24 p-8 bg-[#6B8B93]">

            <section className="bg-[#DAE2DF] shadow-md p-4 rounded-lg self-start">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Genre Names</h3>
                <p className="text-sm text-[#3D5C64]">Sorted by name</p>
                <GenreList genres={props.genres} populateInfo={setSelectedGenre}/>
            </section>

            <div className="flex flex-col gap-4">

                <section className="bg-[#DAE2DF] shadow-md p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-left text-[#0A171A]">Genre Info</h3>
                    <GenreInfo genre={selectedGenre}/>
                </section>

                <section className="bg-[#DAE2DF] shadow-md p-4 rounded-lg flex-1 text-left">
                    <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for the Genre</h3>
                    <p className="text-sm text-[#3D5C64]">Sorted by title</p>
                    {selectedGenre ? 
                        (<GenrePainting genre={selectedGenre} paintings={props.paintings} learnMore={setSelectedPainting}/>)
                        : (<p className="text-[#0A171A] mt-4">Please select a genre to view its paintings.</p>)}
                </section>

                {selectedPainting && <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} 
                                                    favPainting={props.favPainting} onClose={() => setSelectedPainting(null)} 
                                                    onFav={() => props.addPainting(prev => [...prev, selectedPainting])}/>}

            </div>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-[#0A171A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#3D5C64] transition z-50">
            ↑ Top
            </button>

        </main>
    );
}

export default Genre;