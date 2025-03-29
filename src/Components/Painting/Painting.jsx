import PaintingFilter from "./PaintingFilter";
import PaintingInfo from "./PaintingInfo";
import PaintingList from "./PaintingList";
import { useState, useEffect} from 'react';

const Painting = (props) => {

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
        <main className="grid grid-cols-[3fr_7fr] gap-4 mt-24 p-8 bg-[#6B8B93]">
          <section className="bg-[#A0BBBF] shadow-md p-4 rounded-lg self-start">
              <h3 className="text-lg font-semibold text-[#0A171A]">Painting Filters</h3>
              <PaintingFilter/>
          </section>

          <section className="bg-[#A0BBBF] shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-left text-[#0A171A]">Paintings that match the filter</h3>
              <PaintingList paintings={props.paintings} learnMore={setSelectedPainting}/>
          </section>

          {selectedPainting && <PaintingInfo painting={selectedPainting} key={selectedPainting.paintingId} onClose={() => setSelectedPainting(null)}/>}

      </main>
    );
}

export default Painting;

// main bg-[#6B8B93]
// section bg-[#A0BBBF]
// h in section text-[#0A171A]
// 