import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'

class MapView extends Component {
    constructor() {
        super();
        this.state = {
            home: {
                lat: 51.505,
                lng: -0.09
            },
            zoom: 17,
            markers: []
        }

        this.addMarker = this.addMarker.bind(this);
        this.refmarker = React.createRef();
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                home: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });
        });
    }

    addMarker = (e) => {
        const {markers} = this.state;
        markers.push(e.latlng);
        this.setState({markers})
        console.log(markers);
    }

    deleteSign = (e) => {
        const {markers} = this.state;
        markers.splice(e.latlng);
        this.setState({markers});
        console.log(markers);
    }

    updatePosition = () => {
        const marker = this.refmarker.current
        if (marker != null) {
            this.setState({
                markers: marker.leafletElement.getLatLng(),
            })
            console.log(this.state.markers);
        }
    }

    render() {
        const pointerIcon = new L.Icon({
            iconUrl: require('../assets/marker-icon.png'),
            iconSize: [25, 41]
        })

        const startPosition = [this.state.home.lat, this.state.home.lng]

        return(
            <Map className="map" center={startPosition} zoom={this.state.zoom} onClick={this.addMarker}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={startPosition} icon={pointerIcon}>
                    <Popup>
                        This is the home for sale.
                    </Popup>
                </Marker>
                {this.state.markers.map((position, idx) => 
                    <Marker key={`marker-${idx}`} position={position} icon={pointerIcon} draggable={true} onDragend={this.updatePosition} ref={this.refmarker}>
                        <Popup>
                            Lat: {this.state.markers[idx].lat}, Lng: {this.state.markers[idx].lng}
                            <button onClick={this.deleteSign}>delete sign</button>
                        </Popup>
                    </Marker>
                )}
            </Map>
        );
    }
}

export default MapView;