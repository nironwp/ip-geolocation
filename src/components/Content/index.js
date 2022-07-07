import React from 'react';
import "leaflet/dist/leaflet.css";
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../NavBar';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer,  Marker, Popup, TileLayer } from 'react-leaflet';


import { Container, InfosSection, Mapa, TheIp, TheLocation, TheTimezone, TheIsp} from './styles';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;


function Content() {
    const [ip, setIp] = useState()
    const [location, setLocation] = useState()
    const [other, setOther] = useState()
    const osmAttribution = `
    &copy
    <a href="http://osm.org/copyright">OpenStreetMap</a>
    contributors`


    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_dg8ctdleP8WvL2yapcoolYFVV6sh1&ipAddress=${ip}`)
        .then(resp => resp.json())
        .then(resposta => {
            console.log(resposta);
            setOther(resposta)
            setLocation(resposta.location)
        })
    },[ip])
  return(
    <>
    <Container>
        <NavBar setIp = {setIp}/>

        <InfosSection>
            <TheIp>
                <h1>IP ADDRESS</h1> 
                <h2>{location ? other.ip : "192.212.174.101"}</h2>
            </TheIp>
            <TheLocation>
                <h1>LOCATION</h1> 
                <h2>{location ? location.city : "Brooklyn, NY 10001" }</h2>
            </TheLocation>
            <TheTimezone>
                <h1>TIMEZONE</h1> 
                <h2>{location ? "UTC "+location.timezone : "UTC -05:00" }</h2>
            </TheTimezone>
            <TheIsp>
                <h1>ISP</h1> 
                <h2>{location ? other.isp : "SpaceX Starlink"}</h2>
            </TheIsp>
        </InfosSection>
        {location && 
        <MapContainer
            style={{width:'100%', height: '69vh' , zIndex:'-1'}}
            center={[ location.lat,location.lng]}
            zoom={13}
            scrollWheelZoom = {false}
        >
            <TileLayer
                attribution={osmAttribution}
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[location.lat, location.lng]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
        </MapContainer> }
        {!location && 
            <MapContainer
                    style={{width:'100vw', height: '69vh',zIndex:'-1'}}
                    center={[34.04915, -118.09462]}
                    zoom={13} 
                    scrollWheelZoom={false}
                    zoomControl = {false}
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[34.04915, -118.09462]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>   

            </MapContainer>
        }
        <Mapa id = "map" />

    </Container>
    </>
  )
}

export default Content;