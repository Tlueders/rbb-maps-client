import React, { Component } from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';


class MapView extends Component {
    constructor() {
        super();
        this.state = {
            zoom: 3
        }

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

    deleteSign = (idx) => {
        const markers = this.state.markers;
        markers.splice(idx, 1);
        this.setState({ markers });
    }
    
    render() {
        const { Header, Content} = Layout;
    
        const pointerIcon = new L.Icon({
            iconUrl: require('../assets/marker-icon.png'),
            iconSize: [25, 41]
        });

        const startPosition = [this.props.home.lat, this.props.home.lng]

        console.log(this.props);
        return(
                <Layout>
                    <Sidebar step={this.props.step} />
                    <Layout>
                        <Header style={{backgroundColor:'#1890ff'}}>
                        </Header>
                        <Content>
                            <Map className="map" center={startPosition} zoom={this.state.zoom} onClick={this.props.onClick} ref={this.mapRef}>
                                <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {this.props.markers.map((position, idx, props) => 
                                    <Marker key={idx} position={position} icon={pointerIcon} ref={this.refmarker}>
                                        <Popup>
                                            Lat: {this.props.markers[idx].lat}, Lng: {this.props.markers[idx].lng}
                                            <button onClick={this.props.deleteSign.bind(this, idx)}>delete sign</button>
                                        </Popup>
                                    </Marker>
                                )}
                            </Map>
                        </Content>
                    </Layout>                     
                </Layout>
        );
    }
}

export default MapView;