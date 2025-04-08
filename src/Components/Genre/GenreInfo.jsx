// File Name: GenreInfo
// Purpose: Populates selected genre's information
// Detail: This component takes in selected genre object and populates genre
//          info. Users are able to view selected genre's information.

import {useState} from 'react';
const GenreInfo = (props) => {

    const {genre} = props;
    // const name = genre ? genre.genreName : "NA";
    // const description = genre ? genre.description : "-";
    // const info = genre?.wikiLink ? "Genre Link" : "Link Not Available";
    // const infoUrl = genre ? genre.wikiLink : "#";

    const [expanded, setExpanded] = useState(false);

    if (!genre) return <p className="text-[#0A171A] text-left">Please select a genre.</p>;

    const name = genre.genreName;
    const description = genre.description || "-";
    const info = genre?.wikiLink ? "Genre Link" : "Link Not Available";
    const infoUrl = genre?.wikiLink || "#";


    return(
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-2">
                <p className="text-left"><strong>Name:</strong> <span className="text-[#3D5C64]">{name}</span></p>

                <p className="text-justify text-[#3D5C64]">
                <strong>Description:</strong>{' '}
                {expanded ? description : `${description.slice(0, 300)}... `}
                {description.length > 300 && (
                    <button className="text-blue-600 hover:underline ml-1 text-sm"
                            onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Show less' : 'Show more'}
                    </button>
                )}
                </p>

                <p className="text-left"><strong>More Info:</strong>{' '}
                <a href={infoUrl} className="text-blue-500 hover:underline">{info}</a>
                </p>
            </div>

                <div className="flex-shrink-0 w-[160px] h-[160px] bg-gray-200 border rounded-md overflow-hidden">
                <img
                    src={`/genres/${genre.genreId}.jpg`}
                    alt="Genre example"
                    className="w-full h-full object-cover"/>
                </div>
        </div>
    );
}

export default GenreInfo;