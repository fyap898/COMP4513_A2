const Remove = (favGal, favArt, favPainting, selGal, selArt, selPainting, setFavGal, setFavArt, setFavPainting) => {
    if(selGal)
    {
        const updatedGal = favGal.filter(g => g.galleryId !== selGal.galleryId);
        setFavGal(updatedGal);
    }

    if(selArt)
    {
        const updatedArt = favArt.filter(a => a.artistId !== selArt.artistId);
        setFavArt(updatedArt);
    }

    if(selPainting)
    {
        const updatedPainting = favPainting.filter(p => p.paintingId !== selPainting.paintingId);
        setFavPainting(updatedPainting);
    }

};

export default Remove;