import { withStyles } from "@material-ui/styles";
import { scaleQuantile } from "d3-scale";
import React, { Component } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import INDIA_TOPO_JSON from "../constants/india.topo.json";
import styles from '../styles/MapStyles';
import "../styles/MapStyles.js";
import LinearGradient from "./LinearGradient.js";


const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], 
};

const COLOR_RANGE = [
  
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipContent: "",
      data: [
        { id: "AP", state: "Andhra Pradesh", value: 5 },
        { id: "AR", state: "Arunachal Pradesh", value: 2 },
      ],
    };
  }

  

  onMouseLeave = () => {
    this.setState({ tooltipContent: "" });
  };

  render() {
    const data = this.props.mapData;
    // const { classes } = this.props
    const gradientData = {
      fromColor: COLOR_RANGE[0],
      toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
      min: 0,
      max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
    };

    const colorScale = scaleQuantile()
      .domain(data.map((d) => d.value))
      .range(COLOR_RANGE);

    return (
      <div>
        <ReactTooltip>{this.state.tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = data.find((s) => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={this.onMouseEnter(geo, current)}
                    onMouseLeave={this.onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <LinearGradient data={gradientData} />
      </div>
    );
  }
}

export default withStyles(styles)(Map);
