// File Name: PaintingFilter
// Purpose: Allow user to apply filters for painting queries
// Detail: One among the Categories like Year of Work range, Title, Gallery 
//          and Artist can be selected to be apply for filtering paintings.

const PaintingFilter = (props) => {

    const {artists, galleries, paintings, 
            filterType, setFilterType, 
            titleValue, setTitleValue,
            artistValue, setArtistValue,
            galleryValue, setGalleryValue, 
            yearFrom, setYearFrom, yearTo, setYearTo} = props;

    const artistOptions = artists.map((a) => {
        const name = [a.firstName, a.lastName].filter(Boolean).join(' ');
        return (
          <option key={a.artistId} value={a.artistId}>
            {name}
          </option>
        );
    });

    const galleryOptions = galleries.map((g) => 
        (<option key={g.galleryId} value={g.galleryId}>{g.galleryName}</option>)
    );

    return(
        <div className="mt-4 space-y-4">
            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]" 
                        onChange={() => setFilterType('title')} checked={filterType === 'title'}/>
                <span className="text-[#0A171A]">Title</span>
                <input type="text" value={titleValue} onChange={(e) => setTitleValue(e.target.value)} 
                        className={`border border-[#6B8B93] rounded-md px-2 py-1 w-full 
                                        ${filterType !== 'title' ? "bg-gray-400" : "bg-[#DAE2DF]"}`} 
                        disabled={filterType !== 'title'}/>
            </label>

            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]" 
                        onChange={() => setFilterType('artist')} checked={filterType === 'artist'}/>
                <span className="text-[#0A171A]">Artist</span>
                <select className={`border border-[#6B8B93] rounded-md px-2 py-1 w-full 
                                        ${filterType !== 'artist' ? "bg-gray-400" : "bg-[#DAE2DF]"}`} 
                        disabled={filterType !== 'artist'} value={artistValue} 
                        onChange={(e) => setArtistValue(e.target.value)}>
                    <option>Select an Artist</option>
                    {artistOptions}
                </select>
            </label>

            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]" 
                        onChange={() => setFilterType('gallery')} checked={filterType === 'gallery'}/>
                <span className="text-[#0A171A]">Gallery</span>
                <select className={`border border-[#6B8B93] rounded-md px-2 py-1 w-full 
                                        ${filterType !== 'gallery' ? "bg-gray-400" : "bg-[#DAE2DF]"}`} 
                        disabled={filterType !== 'gallery'} value={galleryValue}
                        onChange={(e) => setGalleryValue(e.target.value)}>
                    <option>Select a Gallery</option>
                    {galleryOptions}
                </select>
            </label>

            <div className="flex flex-col">
                <label className="flex items-center space-x-2">
                    <input type="radio" name="filter" className="w-3.5 h-3.5 text-[#3D5C64]" 
                            onChange={() => setFilterType('year')} checked={filterType === 'year'}/>
                    <span className="text-[#0A171A]">Year</span>
                </label>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[#0A171A]">From</span>
                    <input type="text" className={`border border-[#6B8B93] rounded-md px-2 py-1 w-16 
                                                    ${filterType !== 'year' ? "bg-gray-400" : "bg-[#DAE2DF]"}`} 
                            disabled={filterType !== 'year'} value={yearFrom} onChange={(e) => setYearFrom(e.target.value)}/>
                    <span className="text-[#0A171A]">To</span>
                    <input type="text" className={`border border-[#6B8B93] rounded-md px-2 py-1 w-16 
                                                    ${filterType !== 'year' ? "bg-gray-400" : "bg-[#DAE2DF]"}`} 
                            disabled={filterType !== 'year'} value={yearTo} onChange={(e) => setYearTo(e.target.value)}/>
                </div>
            </div>

            <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 bg-[#3D5C64] text-[#DAE2DF] rounded-md hover:bg-[#0A171A]"
                        onClick={props.onClear}>Clear</button>
                <button className="px-4 py-2 bg-[#0A171A] text-white rounded-md hover:bg-[#3D5C64]"
                        onClick={props.onFilter}>Filter</button>
            </div>

        </div>
    );
}

export default PaintingFilter;
