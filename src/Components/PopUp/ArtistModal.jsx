// File Name: ArtistModal
// Purpose: Pop up for detailed artist's information
// Detail: Pops up and display respective artist's information.

const ArtistModal = (props) => {

    //Populate artist's info
    const {artist} = props;
    const name = artist ? `${artist?.firstName} ` + `${artist.lastName}` : "N/A";
    const nationality = artist?.nationality || "-";
    const gender = artist?.gender === "M" ? "Male" : artist?.gender === "F" ? "Female" : "-";
    const birthYear = artist?.yearOfBirth ? artist.yearOfBirth : "-";
    const deathYear = artist?.yearOfDeath ? artist.yearOfDeath : '-';
    const fullDetails = artist?.details || "-";
    const artistUrl = artist?.artistLink || "#";
    const artistHyperlink = artistUrl === "#" ? "Artist Link Not Available" : "Click Here";

    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-60 overflow-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-6xl min-h-[550px] relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Artist Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button onClick={props.onClose} className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">Close</button>
                    </div>
                </div>

                {/* Content layout */}
                <div className="flex gap-6">
                
                {/* Left Map Panel */}
                    <div className="flex-shrink-0 w-[300px] h-[300px] overflow-hidden flex items-center justify-center">
                        <img
                        src={`/artists/full/${artist.artistId}.jpg`}
                        alt="Thumbnail"
                        className="max-w-full max-h-[90vh] object-contain rounded-md"
                        />
                    </div>

                    {/* Right Info Panel */}
                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2 overflow-y-auto max-h-[90vh] pr-2">
                        <h3 className="text-3xl font-bold text-left">{name}</h3>

                        <div className="text-left text-gray-700 space-y-1 mt-2">

                            <p><span className="font-semibold">Nationality:</span> {nationality}</p>
                            <p><span className="font-semibold">Gender:</span> {gender}</p>
                            <p><span className="font-semibold">Year of Birth:</span> {birthYear}</p>
                            <p><span className="font-semibold">Year of Death:</span> {deathYear}</p>
                            <p><span className="font-semibold">Details:</span> {fullDetails}</p>
                            <p><span className="font-semibold">Artist Link:</span> <a href={artistUrl} className="hover:underline text-blue-600 hover:text-blue-800">{artistHyperlink}</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistModal;