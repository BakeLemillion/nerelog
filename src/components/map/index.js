import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'react-leaflet-markercluster/dist/styles.min.css';
import './map.css'

import { useSelector, useDispatch } from 'react-redux';

const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();
    let size = 'LargeXL';

    if (count < 10) {
        size = 'Small';
    }
    else if (count >= 10 && count < 100) {
        size = 'Medium';
    }
    else if (count >= 100 && count < 500) {
        size = 'Large';
    }
    const options = {
        cluster: `markerCluster${size}`,
    };

    return L.divIcon({
        html:
            `<div>
        <span class="markerClusterLabel">${count}</span>
      </div>`,
        className: `${options.cluster}`,
    });
};

const Map = () => {

    const apps = useSelector(state => state.main)

    const [items, setItems] = useState([])
    const [client, setClient] = useState([])

    useEffect(() => {
        if (apps.apps) {
            setItems(apps.apps)
        }
        if (apps.apps) {
            setClient(apps.clients)
        }
    }, [apps])

    const clientName = (client_id) => {
        let name = client.find(item => item.id == client_id);
        return `${name.name}`
    }

    return (
        <>
            <MapContainer
                center={[43.238949, 76.889709]}
                zoom={12}
                zoomControl={false}
                style={{ height: '100vh', width: '100%' }}
            >
                <TileLayer
                    attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup
                    iconCreateFunction={createClusterCustomIcon}
                    spiderLegPolylineOptions={{
                        weight: 0,
                        opacity: 0,
                    }}
                >
                    {items && items.map(item =>
                        <Marker position={[item.coords.lat, item.coords.long]} key={item.id}
                            onMouseOver={() =>
                                console.log("hover was")
                            }
                            onMouseOut={e => {
                                e.target.closePopup();
                            }}
                        >
                            <Popup>
                                id:{item.id} <br />
                                name: {clientName(item.client_id)} <br />
                                price: {item.price}
                            </Popup>
                        </Marker>)}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}

export default Map