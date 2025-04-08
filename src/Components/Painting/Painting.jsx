// File Name: Painting
// Purpose: Components for display paintings' data 
// Detail: This component renders Painting page which consists section such as
//          Painting Filter, Painting List and Painting Info. Users will have to
//          apply filters in order to search desired paintings. Users will be able
//          to view details of the painting and add to favourite list.

import PaintingFilter from "./PaintingFilter";
import PaintingInfo from "../PopUp/PaintingInfo";
import PaintingList from "./PaintingList";
import FilterPainting from "./FilterPainting";
import { useState, useEffect} from 'react';

const Painting = (props) => {

    const [selectedPainting, setSelectedPainting] = useState(null);

    //Effects when modal dialog pops up
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

    const [filterType, setFilterType] = useState('year'); //'year', 'title', 'artist', 'gallery'
    const [titleValue, setTitleValue] = useState('');
    const [artistValue, setArtistValue] = useState('');
    const [galleryValue, setGalleryValue] = useState('');
    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');
    const [filteredPaintings, setFilteredPaintings] = useState(props.paintings);

    const applyFilter = () => {
      const result = FilterPainting(
                                  filterType,
                                  titleValue,
                                  artistValue,
                                  galleryValue,
                                  yearFrom,
                                  yearTo,
                                  props.paintings
                                );
      setFilteredPaintings(result);
    }

    const clearFilter = () => {
      setTitleValue('');
      setArtistValue('');
      setGalleryValue('');
      setYearFrom('');
      setYearTo('');
      setFilteredPaintings(props.paintings);
    }

    // to render data when first loaded
    useEffect(() => {
      setFilteredPaintings(props.paintings);
    }, [props.paintings]);
    

    return(
        <main className="grid grid-cols-[3fr_7fr] gap-4 mt-24 p-8 bg-[#6B8B93]">
          <section className="bg-[#A0BBBF] shadow-md p-4 rounded-lg self-start">
              <h3 className="text-lg font-semibold text-[#0A171A]">Painting Filters</h3>
              <PaintingFilter artists={props.artists} galleries={props.galleries} paintings={props.paintings}
                              filterType={filterType} setFilterType={setFilterType} titleValue={titleValue} setTitleValue={setTitleValue}
                              artistValue={artistValue} setArtistValue={setArtistValue} galleryValue={galleryValue} setGalleryValue={setGalleryValue} 
                              yearFrom={yearFrom} setYearFrom={setYearFrom} yearTo={yearTo} setYearTo={setYearTo} onFilter={applyFilter} onClear={clearFilter}/>
          </section>

          <section className="bg-[#A0BBBF] shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-left text-[#0A171A]">Paintings that match the filter</h3>
              <PaintingList paintings={filteredPaintings} learnMore={setSelectedPainting}/>
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

export default Painting;

// main bg-[#6B8B93]
// section bg-[#A0BBBF]
// h in section text-[#0A171A]
// 