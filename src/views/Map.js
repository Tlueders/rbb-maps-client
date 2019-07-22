import React, { Component } from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
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
        this.setState({
            zoom: 17
        })
    }

    deleteSign = (idx) => {
        const { values } = this.props;
        const markers = values.markers;
        markers.splice(idx, 1);
        this.setState({ markers });
    }
    
    render() {
        const { values } = this.props;
        const { Header, Content} = Layout;
        const pointerIcon = new L.Icon({
            iconUrl: require('../assets/marker-icon.png'),
            iconSize: [25, 41]
        });
        const startPosition = [values.home.lat, values.home.lng]
        console.log(startPosition);

        return(
                <Layout>
                    <Sidebar step={this.props.step}>
                        {values.markers.map((marker) => 
                            <li>{marker.lat}, {marker.lng}</li>
                        )}
                    </Sidebar>
                    <Layout>
                        <Header style={{backgroundColor:'#1890ff'}}>
                        </Header>
                        <Content>
                            <Map className="map" style={{height: '100vh'}} center={startPosition} zoom={this.state.zoom} onClick={this.props.onClick} ref={this.mapRef}>
                                <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={startPosition} icon={pointerIcon}>
                                    <Popup>
                                        Home
                                    </Popup>
                                </Marker>
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