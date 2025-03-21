import GenreInfo from "./GenreInfo";
import GenreList from "./GenreList";
import GenrePainting from "./GenrePainting";

const Genre = () => {
    return(
        <main class="grid grid-cols-[2fr_8fr] gap-4 mt-24 p-8">

            <section class="bg-white shadow-md p-4 rounded-lg">
                <h3 class="text-lg font-semibold">List of Genre Names</h3>
                <p class="text-sm text-gray-600">Sorted by name</p>
                <GenreList/>
            </section>

            <div class="flex flex-col gap-4">

                <section class="bg-white shadow-md p-4 rounded-lg">
                    <h3 class="text-lg font-semibold mb-2 text-left">Genre Info</h3>
                    <GenreInfo/>
                </section>

                <section class="bg-white shadow-md p-4 rounded-lg flex-1 text-left">
                    <h3 class="text-lg font-semibold ">Paintings for the Genre</h3>
                    <p class="text-sm text-gray-600">Sorted by title</p>
                    <GenrePainting/>
                </section>

            </div>

        </main>
    );
}

export default Genre;