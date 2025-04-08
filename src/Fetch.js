// File Name: Fetch
// Purpose: A helper function to fetch data
// Detail: Queries multiple Supabase tables (artists, galleries, paintings, genres, paintinggenres)
//         and returns the data for use in the App component.

import supabase from './supabase.js'; // adjust path to your supabase.js

async function fetchAllData() {
    console.log('getting from supabase…');

    const { data: artistsData, error: artistsError } = await supabase
      .from('artists')
      .select('*');
    if (artistsError) {
      console.error('Error fetching artists:', artistsError);
      return;
    }

    const { data: galleriesData, error: galleriesError } = await supabase
      .from('galleries')
      .select('*');
    if (galleriesError) {
      console.error('Error fetching galleries:', galleriesError);
      return;
    }

    const { data: paintingsData, error: paintingsError } = await supabase
      .from('paintings')
      .select('*');
    if (paintingsError) {
      console.error('Error fetching paintings:', paintingsError);
      return;
    }

    const { data: genresData, error: genresError } = await supabase
      .from('genres')
      .select('*');
    if (genresError) {
      console.error('Error fetching genres:', genresError);
      return;
    }

    const { data: paintingGenresData, error: paintingGenresError } = await supabase
      .from('paintinggenres')
      .select('*');
    if (paintingGenresError) {
      console.error('Error fetching genres:', paintingGenresError);
      return;
    }

    return {
        artistsData,
        galleriesData,
        paintingsData,
        genresData,
        paintingGenresData
      };
}

export default fetchAllData;