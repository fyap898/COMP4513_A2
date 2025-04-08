// File Name: EnrichPaintings
// Purpose: A helper function to recompose painting objects
// Detail: Takes in all painting, gallery, artist, paintingGenre and genre objects. Recompose
//          all painting objects by matching each painting objects to their respective associate criterias
//          such as artist with id, gallery with id and location, genre with id and name, parsing respective painting's
//          dominant colours and add them as new instances to the painting objects.

// Populate IDs in paintings into actual data
// Populate data of painting's dominant colours
function EnrichPaintings(paintings, artists, galleries, genres, paintingGenres) {
    const enrichedPaintings = paintings.map((p) => {
        const artist = artists.find((a) => a.artistId === p.artistId);
        const gallery = galleries.find((g) => g.galleryId === p.galleryId);
    
        const annotation = p.jsonAnnotations ? JSON.parse(p.jsonAnnotations) : {};
        const domColors = annotation.dominantColors || [];
    
        const genreIds = paintingGenres
          .filter(pg => pg.paintingId === p.paintingId)
          .map(pg => pg.genreId);
    
        const genreNames = genres
          .filter(g => genreIds.includes(g.genreId))
          .map(g => g.genreName);
    
        return {
          ...p,
          artistName: artist ? `${artist.firstName || ''} ${artist.lastName}`.trim() : "Unknown",
          galleryName: gallery?.galleryName || "Unknown",
          galleryCity: gallery?.galleryCity || "Unknown",
          domColors,
          genreNames
        };
    });

    return enrichedPaintings;
}

export default EnrichPaintings;