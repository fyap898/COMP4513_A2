import { useEffect, useState } from 'react';

const ArtistInfo = (props) => {
    
    const [imageUrl, setImageUrl] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [artistImages, setArtistImages] = useState({}); // cache


    const{artist} = props;
    const name = artist ? `${artist?.firstName} ` + `${artist.lastName}` : "N/A";
    const nationality = artist?.nationality || "-";
    const gender = artist?.gender === "M" ? "Male" : artist?.gender === "F" ? "Female" : "-";
    const year = artist?.yearOfBirth && artist?.yearOfDeath ? `${artist.yearOfBirth} - ${artist.yearOfDeath}` : "-";
    const fullDetails = artist?.details || "-";
    const shortDetails = fullDetails.length > 150 ? fullDetails.substring(0, 150) + "..." : fullDetails;
    const artistUrl = artist?.artistLink || "#";

    const toggleDetails = () => setExpanded(prev => !prev);

    // fetching artist's image through wiki link
    useEffect(() => {
      if (!artist) return;

      const cached = artistImages[artist.artistId];
      if (cached) {
        setImageUrl(cached);
        return;
      }

      if (!artist?.artistLink) {
        setImageUrl(null);
        return;
      }

      const title = decodeURIComponent(artist.artistLink.split('/').pop());
  
      fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${title}&pithumbsize=400`)
        .then((res) => res.json())
        .then((data) => {
          const pages = data.query.pages;
          const page = pages[Object.keys(pages)[0]];
          const img = page?.thumbnail?.source || null;

          //cache image
          setArtistImages((prev) => ({ ...prev, [artist.artistId]: img }));
          setImageUrl(img);
        })
        .catch((err) => {
          console.error("Failed to fetch image", err);
          setImageUrl(null);
        });
    }, [artist]);

      useEffect(() => {
        setExpanded(false); // Reset to collapsed state when artist changes
      }, [artist]);

    return(
        <>
            <div className="mt-2 space-y-2 text-left">
              <p><strong>Name:</strong> <span id="artist-name" className="text-[#DAE2DF]">{name}</span></p>
              <p><strong>Nationality:</strong> <span id="artist-nationality" className="text-[#DAE2DF]">{nationality}</span></p>
              <p><strong>Gender:</strong> <span id="artist-gender" className="text-[#DAE2DF]">{gender}</span></p>
              <p><strong>Years:</strong> <span id="artist-years" className="text-[#DAE2DF]">{year}</span></p>
              <p><strong>Details:</strong> <span id="artist-details" className="text-[#DAE2DF]">
                {expanded ? fullDetails : shortDetails}
                {fullDetails.length > 150 && (
                    <button onClick={toggleDetails} className="ml-2 text-blue-300 underline hover:text-blue-500">
                    {expanded ? "Show less" : "Read more"}
                    </button>
                )}
                </span></p>
              <p><strong>URL:</strong> <a href={artistUrl} id="artist-url" className="text-blue-400 underline">Artist Link</a></p>
            </div>
            <button className="mt-4 px-4 py-2 bg-[#DAE2DF] text-black rounded-md hover:bg-[#0A171A] hover:text-white">Add Favorites</button>
            <div className="mt-4 w-[200px] h-[300px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mx-auto">
                <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
            </div>            
        </>
    );
}

export default ArtistInfo;

// Display nothing as default and disable button when no artist is selected
// button***