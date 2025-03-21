import PaintingFilter from "./PaintingFilter";
import PaintingList from "./PaintingList";

const Painting = () => {
    return(
        <main class="grid grid-cols-[3fr_7fr] gap-4 mt-24 p-8 bg-[#6B8B93]">

          <section class="bg-[#A0BBBF] shadow-md p-4 rounded-lg self-start">
              <h3 class="text-lg font-semibold text-[#0A171A]">Painting Filters</h3>
              <PaintingFilter/>
          </section>

          <section class="bg-[#A0BBBF] shadow-md p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-left text-[#0A171A]">Paintings that match the filter</h3>
              <p class="text-sm text-gray-600 text-left text-[#3D5C64]">Initially sorted by year</p>
              <PaintingList/>
          </section>

      </main>
    );
}

export default Painting;