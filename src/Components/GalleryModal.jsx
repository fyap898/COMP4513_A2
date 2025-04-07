import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useEffect} from 'react';

// Fix default marker icon (Leaflet bug in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const GalleryModal = (props) => {

    //Populating gallery's info
    const {gallery} = props;
    const galleryName = gallery ? gallery.galleryName : "N/A";
    const nativeName = gallery ? gallery.galleryNativeName : "-";
    const city = gallery ? gallery.galleryCity : "-";
    const address = gallery ? gallery.galleryAddress : "-";
    const country = gallery ? gallery.galleryCountry : "-";
    const url = gallery ? gallery.galleryWebsite : "#";
    const galleryHyperlink = url === "#" ? "Gallery Link Not Available" : "Gallery Link";

    const lat = gallery?.latitude || 0;
    const lng = gallery?.longitude || 0;

   

    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-60 overflow-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-6xl min-h-[550px] relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Gallery Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button onClick={props.onClose} className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">Close</button>
                    </div>
                </div>

                {/* Content layout */}
                <div className="flex gap-6">
                
                {/* Left Map Panel */}
                    <div className="flex-shrink-0 w-[300px] h-[300px] overflow-hidden flex items-center justify-center">
                        <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[lat, lng]}>
                                <Popup>{galleryName}</Popup>
                            </Marker>
                        </MapContainer>
                        {/* <img
                        src={`/paintings/full/${imageFileName.padStart(6, '0')}.jpg`}
                        alt="Thumbnail"
                        className="max-w-full max-h-[90vh] object-contain rounded-md"
                        /> */}
                    </div>

                    {/* Right Info Panel */}
                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2 overflow-y-auto max-h-[90vh] pr-2">
                        <h3 className="text-3xl font-bold text-left">{galleryName}</h3>

                        <div className="text-left text-gray-700 space-y-1 mt-2">

                            <p><span className="font-semibold">Gallery Native Name:</span> {nativeName}</p>
                            <p><span className="font-semibold">Gallery City:</span> {city}</p>
                            <p><span className="font-semibold">Gallery Address:</span> {address}</p>
                            <p><span className="font-semibold">Gallery Country:</span> {country}</p>
                            <p><span className="font-semibold">Gallery Latitude:</span> {lat}</p>
                            <p><span className="font-semibold">Gallery Longitude:</span> {lng}</p>
                            <p><span className="font-semibold">Gallery Website:</span> <a href={url} className="hover:underline text-blue-600 hover:text-blue-800">{galleryHyperlink}</a></p>
                        </div>

                        {/* Colors */}
                        {/* <div className="mt-4">
                            <p className="text-xl text-left font-bold mb-2">Dominant Colors</p>
                            <div className="flex gap-2 flex-wrap">
                                {props.painting.domColors.map(c => (
                                <PaintingDomColItem key={`${c.web}-${c.name}`} colourCode={c.web} colourName={c.name} />
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GalleryModal;