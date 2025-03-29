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