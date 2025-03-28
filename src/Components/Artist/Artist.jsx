import ArtistList from "./ArtistList";
import ArtistInfo from "./ArtistInfo";
import ArtistPaintingList from "./ArtistPaintingList";

const Artist = (props) => {
    return(
        <main className="grid grid-cols-[2fr_3fr_5fr] gap-4 mt-24 p-8 bg-[#DAE2DF]">
            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0A171A]">List of Artist Names</h3>
                <p className="text-sm text-gray-300">(Last Name, First Name) sorted by last name</p>
                <ArtistList artists={props.artists}/>
            </section>

            <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0A171A]">Artist Info</h3>
                <ArtistInfo/>
            </section>
            {/* <section className="bg-[#6B8B93] shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0A171A]">Paintings for Selected Artist</h3>
                <p className="text-sm text-gray-300">Sorted by title</p>
                <ArtistPaintingList/>
            </section> */}
        </main>
    );
}

export default Artist;