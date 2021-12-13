import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import {PostFormPage, eventLocation } from "../pages/PostFormPage";


var geocoder = new google.maps.Geocoder();
geocoder.geocode({ 'address': eventLocation }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        results[0].geometry.location;

    }
    else
        alert('error: ' + status);

});


function GMap(){
    return (
        <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{lat: 40.7128, lng: -74.0060}}
        > 
            <Marker position={{lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}}/>
        </GoogleMap>
    );
}


const WrappedMap = withScriptjs(withGoogleMap(GMap));
 
export default function Map() {
    return(
        <div style={{ width: "600px", height: "400px" }}>
            <WrappedMap
                googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8elomWP1QiWtBxQnatkC986I3ec2dl30&callback=initMap&libraries=&v=weekly"}
                loadingElement = {<div style={{ height: "100%" }} />}
                containerElement = {<div style={{ height: "100%" }} />}     
                mapElement = {<div style={{ height: "100%" }} />}                 
                
            />
        </div>
    );
}