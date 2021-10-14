/* eslint-disable no-undef */
import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFycnktYXJjIiwiYSI6ImNrcm5rbGE3dDIxcWoydm81dnQ3N2theWwifQ.eiZamoj0HYumU5GFG8Ae0Q";

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: `${this.props.id}`,
      style: "mapbox://styles/harry-arc/ckrnl3voq3ait17pdknymvdk3",
      scrollZoom: false,
    });
  }

  bounds = new mapboxgl.LngLatBounds();

  createMarker = (coordinates) => {
    const el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(coordinates)
      .addTo(this.map);
  };

  //   createPopUp = ({ lng, lat }) => {
  //     new mapboxgl.Popup({
  //       offset: 30,
  //     })
  //       .setLngLat(lng, lat)
  //       .setHTML("Hello")
  //       .addTo(this.map);
  //     this.bounds.extend(lng, lat);
  //   };

  render() {
    return <>{this.createMarker([+this.props.lat, +this.props.lng])}</>;
  }

  // locations.forEach((loc) => {
  // const el = document.createElement('div');
  // el.className = 'marker';
  // new mapboxgl.Marker({
  //   element: el,
  //   anchor: 'bottom',
  // })
  //   .setLngLat(loc.coordinates)
  //   .addTo(map);

  // new mapboxgl.Popup({
  //   offset: 30,
  // })
  //   .setLngLat(loc.coordinates)
  //   .setHTML(`<p> Day ${loc.day} : ${loc.description} </p>`).addTo(map);
  // bounds.extend(loc.coordinates);
  // });

  // map.fitBounds(bounds, {
  // padding: {
  //   top: 200,
  //   bottom: 150,
  //   left: 100,
  //   right: 100,
  // },
  // });
  // }
}

export default Map;
