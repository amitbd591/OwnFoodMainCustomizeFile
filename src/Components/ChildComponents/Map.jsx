import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import Cities from "../../Database/Cities";
const Map = () => {
  const markerIcon = new L.Icon({
    iconUrl: require("https://res.cloudinary.com/dwmkmhnqo/image/upload/v1673937598/Data/marker_eh2tfs.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  const osm = {
    maptiler: {
      url: "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=7Vn8lBSjAxNkEKphIATz",
      attribution:
        '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
  };

  const [center, setCenter] = useState({ lat: 23.777176, lng: 90.407608 });
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();

  return (
    <section className='Map'>
      <div className='container-fluid'>
        <div className='row' style={{ zIndex: -1 }}>
          <div className='col text-center'>
            <div class='title-area text-center'>
              <span class='sub-title'></span>
              <h2 class='sec-title'>
                Find us in this <span class=' sf_text-theme'>State</span>
              </h2>
            </div>
            <div
              className='col mt-5'
              style={{ position: "relative", overflow: "hidden" }}
            >
              <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                style={{ height: 400, width: "100wh" }}
              >
                <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
                />

                {Cities.map((city, idx) => (
                  <Marker
                    position={[city.lat, city.lng]}
                    icon={markerIcon}
                    key={idx}
                  >
                    <Popup>
                      <b>
                        {city.city}, {city.country}
                      </b>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
