import { useEffect, useState } from 'react';

const ArtistInfo = (props) => {
    
    const [expanded, setExpanded] = useState(false);
    const [showToast, setShowToast] = useState(false);

    //Populate artist's info
    const {artist} = props;
    const name = artist ? `${artist?.firstName} ` + `${artist.lastName}` : "N/A";
    const nationality = artist?.nationality || "-";
    const gender = artist?.gender === "M" ? "Male" : artist?.gender === "F" ? "Female" : "-";
    const year = artist?.yearOfBirth && artist?.yearOfDeath ? `${artist.yearOfBirth} - ${artist.yearOfDeath}` : "-";
    const fullDetails = artist?.details || "-";
    const shortDetails = fullDetails.length > 150 ? fullDetails.substring(0, 150) + "..." : fullDetails;
    const artistUrl = artist?.artistLink || "#";

    //Toggle for expanding description
    const toggleDetails = () => setExpanded(prev => !prev);

    useEffect(() => {
      setExpanded(false); // Reset to collapsed state when artist changes
    }, [artist]);

    const inFav = artist && props.favArt
    ? props.favArt.some((a => a.artistId === artist.artistId))
    : false;

    const getButtonStyle = (inFav) => {
      return inFav 
        ? "mt-4 px-4 py-2 text-black rounded-md bg-gray-400 cursor-not-allowed"
        : "mt-4 px-4 py-2 text-black rounded-md bg-[#DAE2DF] cursor-pointer hover:bg-[#0A171A] hover:text-white";
    }

    const handleAddToFav = () => {
      props.onFav();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    };

    return(
        artist && (<>
            <div className="mt-2 space-y-2 text-left">
              <p><strong>Name:</strong> <span id="artist-name" className="text-[#DAE2DF]">{name}</span></p>
              <p><strong>Nationality:</strong> <span id="artist-nationality" className="text-[#DAE2DF]">{nationality}</span></p>
              <p><strong>Gender:</strong> <span id="artist-gender" className="text-[#DAE2DF]">{gender}</span></p>
              <p><strong>Years:</strong> <span id="artist-years" className="text-[#DAE2DF]">{year}</span></p>
              <p><strong>Details:</strong> <span id="artist-details" className="text-[#DAE2DF]">
                {expanded ? fullDetails : shortDetails}
                {fullDetails.length > 150 && (
                    <button onClick={toggleDetails} className="ml-2 text-blue-300 hover:underline hover:text-blue-500">
                    {expanded ? "Show less" : "Read more"}
                    </button>
                )}
                </span></p>
              <p><strong>URL:</strong> <a href={artistUrl} id="artist-url" className="text-blue-400 hover:underline">Artist Link</a></p>
            </div>
            <button onClick={handleAddToFav} disabled={inFav} className={getButtonStyle(inFav)}>Add Favorites</button>
            <div className="mt-4 w-[200px] h-[300px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mx-auto">
                <img src={`/artists/full/${artist.artistId}.jpg`} alt={name} className="object-cover w-full h-full" />
            </div>  
            {showToast && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A0BBBF] text-black px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInOut">
                  Added to Favourites!
                </div>
            )}
          
        </>)
    );
}

export default ArtistInfo;
// artist info!!!1