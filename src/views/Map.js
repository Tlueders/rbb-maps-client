import React, { Component } from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';

class MapView extends Component {
    constructor() {
        super();
        this.state = {
            home: {
                lat: 51.505,
                lng: -0.09
            },
            zoom: 0,
            markers: []
        }

        this.addMarker = this.addMarker.bind(this);
        // this.updatePosition = this.updatePosition.bind(this);
        this.refmarker = React.createRef();
        this.mapRef = React.createRef();
    }

    componentDidMount(){
        const map = this.mapRef.current.leafletElement;
        const searchControl = new ELG.Geosearch().addTo(map);
        const results = new L.LayerGroup().addTo(map);

        searchControl.on('results', function(data){
            results.clearLayers();
            for (let i = data.results.length - 1; i >= 0; i--) {
                results.addLayer(L.marker(data.results[i].latlng));
            }
        });
    }

    addMarker = (e) => {
        const {markers} = this.state;
        markers.push(e.latlng);
        this.setState({markers})
    }

    deleteSign = (idx) => {
        const markers = this.state.markers;
        markers.splice(idx, 1);
        this.setState({ markers });
    }

    // updatePosition = (idx) => {
    //     const marker = this.refmarker.current;
    //     let {markers} = this.state;
    //     markers[idx] = marker.leafletElement.getLatLng();
    //     this.setState({
    //         markers: markers,
    //         draggable: false
    //     });
    // }

    // toggleDraggable = () => {
    //     this.setState({ draggable: !this.state.draggable })
    // }

    
    render() {
        const pointerIcon = new L.Icon({
            iconUrl: require('../assets/marker-icon.png'),
            iconSize: [25, 41]
        });

        const startPosition = [this.state.home.lat, this.state.home.lng]

        return(
            <React.Fragment>
                <div className='pointer'></div>
                <Map className="map" center={startPosition} zoom={this.state.zoom} onClick={this.addMarker} ref={this.mapRef}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.markers.map((position, idx, props) => 
                        <Marker key={idx} position={position} icon={pointerIcon} ref={this.refmarker}>
                            <Popup>
                                Lat: {this.state.markers[idx].lat}, Lng: {this.state.markers[idx].lng}
                                <button onClick={this.deleteSign.bind(this, idx)}>delete sign</button>
                            </Popup>
                        </Marker>
                    )}
                </Map>
            </React.Fragment>
        );
    }
}

export default MapView;