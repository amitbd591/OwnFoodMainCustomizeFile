import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import Cities from "../../Database/Cities";
import osmProviders from "../../Database/Osm-providers";

const Map = () => {
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
                  url={osmProviders.maptiler.url}
                  attribution={osmProviders.maptiler.attribution}
                />

                {Cities.map((city, idx) => (
                  <Marker position={[city.lat, city.lng]} key={idx}>
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
