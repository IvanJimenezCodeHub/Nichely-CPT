import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { GoogleMap, useLoadScript, Marker, infowindow} from "@react-google-maps/api";
// import usePlacesAutocomplete, {getGeocode, getLatLng, } from "use-places-autocomplete";

const libraries = ["places"];
const mapContainerStyle = {
    width: "400px",
    height: "400px",
};
const center = {
    lat: 40.7128, 
    lng: -74.0060
}

export default function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading apps";
    if (!isLoaded) return "loading maps";

    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={11} 
                center={center}
            ></GoogleMap>
        </div>
    );
}

