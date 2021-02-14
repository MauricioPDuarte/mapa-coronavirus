import React from 'react';
import axios from 'axios';
import { ComposableMap, Geographies, Geography, ZoomableGroup  } from "react-simple-maps"
import ReactTooltip from 'react-tooltip';
import { FiAlertCircle, FiPlus, FiMinus } from 'react-icons/fi';

import paises from './countries'
import topojson from './topojson.json';

import { Details, ListItems, Item, DetailCountry, Container, Tip, Controls } from './styles';

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            paises,
            pais: {},
            tooltip: "",
            position: { coordinates: [0, 0], zoom: 1 }
        };

        this.handleZoomIn = this.handleZoomIn.bind(this);
        this.handleZoomOut = this.handleZoomOut.bind(this);
        this.handleMoveEnd = this.handleMoveEnd.bind(this);
    }
    
    async handleClickMarker(country) {
        var response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`);

        this.setState({
            pais: response.data,
        })
    }

    handleZoomIn() {
        if (this.state.position.zoom >= 4) return;

        this.setState({
            position: {
                ...this.state.position,
                zoom: (this.state.position.zoom * 2)
            }
        })
    }
    
    handleZoomOut() {
        if (this.state.position.zoom <= 1) return;

        this.setState({
            position: {
                ...this.state.position,
                zoom: (this.state.position.zoom / 2)
            }
        })
    }

    handleMoveEnd(position) {
        this.setState({
            position: position
        })
    }

    handleSetTooltip(description) {
        this.setState({
            tooltip: description,
        })
    }



    render() {
        return (
            <Container>        
                <Tip>
                    <FiAlertCircle />
                    Passe o mouse ou clique no país desejado.
                </Tip>      

                <ReactTooltip>{ this.state.tooltip }</ReactTooltip>
                    <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} >
                        <ZoomableGroup
                            zoom={this.state.position.zoom}
                            center={this.state.position.coordinates}
                            onMoveEnd={this.handleMoveEnd}
                         >
                            <Geographies geography={topojson}>
                                {({ geographies }) =>
                                geographies.map(geo => 
                                    <Geography 
                                        key={geo.rsmKey} 
                                        geography={geo} 
                                        onMouseLeave={() => {
                                            this.handleSetTooltip("");
                                        }}
                                        onMouseEnter={() => {
                                            const { NAME } = geo.properties;
                                            this.handleSetTooltip(`${NAME}`);
                                        }}
                                        onMouseOver={() => {
                                            const { NAME } = geo.properties;
                                            this.handleClickMarker(NAME);
                                        }}
                                        onClick={() => {
                                            const { NAME } = geo.properties;
                                            this.handleClickMarker(NAME);
                                        }}
                                        style={{
                                            default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                            },
                                            hover: {
                                            fill: "#F53",
                                            outline: "none"
                                            },
                                            pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                            }
                                    }} />
                                )
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>

                <Controls>
                    <FiPlus onClick={this.handleZoomIn}/>
                    <FiMinus onClick={this.handleZoomOut}/>
                </Controls>

                <Details>
                    <DetailCountry>
                        <h1>{this.state.pais.country}</h1>
                        <span>{this.state.pais.continent}</span>
                    </DetailCountry>

                    <ListItems>
                        <Item>
                            <p>População</p> 
                            <span>{this.state.pais.population}</span>
                        </Item>
                        <Item>
                            <p>Casos</p> 
                            <span>{this.state.pais.cases}</span>
                        </Item>
                        <Item>
                            <p>Mortes</p> 
                            <span>{this.state.pais.deaths}</span>
                        </Item>
                        <Item>
                            <p>Críticos</p> 
                            <span>{this.state.pais.critical}</span>
                        </Item>
                        <Item>
                            <p>Testes</p> 
                            <span>{this.state.pais.tests}</span>
                        </Item>
                    </ListItems>
                </Details>
            </Container>     
        );
    }
}


export default Statistics;