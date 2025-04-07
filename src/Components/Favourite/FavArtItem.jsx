const FavArtItem = (props) => {
    const {artist} = props;
    const name = artist ? `${artist?.firstName} ` + `${artist.lastName}` : "N/A";
    const year = artist ? `${artist.yearOfBirth} - ${artist.yearOfDeath}` : "N/A";
    return(
        <li className="flex items-center gap-6 p-6 rounded-md bg-[#A0BBBF] border-[#6B8B93]">
            <img src={`/artists/full/${artist.artistId}.jpg`}
                alt="Artist Thumbnail" className="w-20 h-20 object-cover rounded-md" />

            <div className="text-left space-y-1 flex-1">
                <p className="text-lg font-semibold text-[#0A171A]">{name}</p>
                <p className="text-sm text-[#3D5C64]">Nationality: {artist.nationality}</p>
                <p className="text-sm text-[#3D5C64]">Year: {year}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
                <button className="px-4 py-2 rounded-md bg-[#3D5C64] text-white font-semibold hover:bg-[#6B8B93] transition"
                        onClick={() => props.learnMore(artist)}>
                    Learn More
                </button>
                <button className="px-3 py-1 rounded-md bg-[#3D5C64] text-white text-sm font-medium hover:bg-red-600 transition"
                        onClick={() => props.remove(artist)}>
                    Remove
                </button>
            </div>
        </li>
    );
}

export default FavArtItem;