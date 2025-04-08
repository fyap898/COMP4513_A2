// File Name FilterPainting
// Purpose: A helper function for filter paintings
// Detail: Utilised by PaintingFilter to filter paintings based on selected
//          criteria with one's desired application of filter.

const FilterPainting = (type, titleValue, artistValue, galleryValue, yearFrom, yearTo, paintings)=> {
    if(type === 'title'){
        return paintings.filter((p) => p.title.toLowerCase().includes(titleValue.toLowerCase()));
    }
    if(type === 'artist'){
        return paintings.filter((p) => p.artistId === parseInt(artistValue));
    }
    if(type === 'gallery'){
        return paintings.filter((p) => p.galleryId === parseInt(galleryValue));
    }
    if(type === 'year'){
        const from = yearFrom ? parseInt(yearFrom) : -Infinity;
        const to = yearTo ? parseInt(yearTo) : Infinity;
        return paintings.filter((p) => p.yearOfWork >= from && p.yearOfWork <= to);
    }

    return paintings;
}

export default FilterPainting;