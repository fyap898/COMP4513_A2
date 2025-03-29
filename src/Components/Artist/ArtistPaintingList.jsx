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
        <div className="mt-4">
            <div className="flex justify-between font-semibold text-[#0A171A] mb-2">
                <button onClick={() => toggleSort("title")} className="hover:underline">
                Title {sortBy === "title" && (ascending ? "↑" : "↓")}
                </button>
                <button onClick={() => toggleSort("yearOfWork")} className="hover:underline">
                Year {sortBy === "yearOfWork" && (ascending ? "↑" : "↓")}
                </button>
            </div>

            <ul className="space-y-2">
                {sortedPaintings.map((p, index) => (
                    <ArtistPaintingListItem key={index} painting={p} learnMore={props.learnMore}/>
                ))}
            </ul>
        </div>
    );
}

export default ArtistPaintingList;