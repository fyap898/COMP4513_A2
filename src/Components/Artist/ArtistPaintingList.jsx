import ArtistPaintingListItem from "./ArtistPaintingListItem";
import {useState} from 'react';

const ArtistPaintingList = (props) => {

    const [sortBy, setSortBy] = useState("title");
    const [ascending, setAscending] = useState(true);

    const artistPaintings = props.paintings.filter(p => p.artistId === props.artist.artistId)
    const sortedPaintings = [...artistPaintings].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if (valA < valB) return ascending ? -1 : 1;
        if (valA > valB) return ascending ? 1 : -1;
        return 0;
    });

    const toggleSort = (field) => {
        if (field === sortBy) {
        setAscending(!ascending);
        } else {
        setSortBy(field);
        setAscending(true);
        }
    };

    return(
        <div className="relative h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#6B8B93] py-2">
                <div className="flex justify-between font-semibold text-[#0A171A] px-1">
                <button onClick={() => toggleSort("title")} className="hover:underline">
                    Title {sortBy === "title" && (ascending ? "↑" : "↓")}
                </button>
                <button onClick={() => toggleSort("yearOfWork")} className="hover:underline">
                    Year {sortBy === "yearOfWork" && (ascending ? "↑" : "↓")}
                </button>
                </div>
            </div>

            {/* Scrollable List */}
            <ul className="space-y-2 pr-1 overflow-y-auto max-h-[470px] mt-2">
                {sortedPaintings.map((p, index) => (
                <ArtistPaintingListItem key={index} painting={p} learnMore={props.learnMore} />
                ))}
            </ul>
        </div>

    );
}

export default ArtistPaintingList;