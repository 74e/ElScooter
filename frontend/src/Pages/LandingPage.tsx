<<<<<<< HEAD
import React from "react";
import LandingImage from "../LandingImage/page.png";
import ProductCard from "../components/ProductCard";
=======
import React from 'react';
import LandingImage from '../LandingImage/header.png';
>>>>>>> 0ef36c5449410230f74b6b55cd02f93d2c6929fa

function LandingPage() {
  return (
<<<<<<< HEAD
    <div style={{ position: "relative" }}>
      <img
        src={LandingImage}
        alt="Min bild"
        style={{
          // top: '-10px',
          // left: '-10px',
          width: "1460px",
          height: "1044px",
=======
    <div style={{ position: 'relative' }}>

      <img src={LandingImage} alt="Min bild"
      style={{
        // top: '-10px',
        // left: '-10px',
        width: '1440px',
        height: '1080px',

>>>>>>> 0ef36c5449410230f74b6b55cd02f93d2c6929fa
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "352px",
          left: "301px",
          width: "873px",
          height: "306px",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // svart färg med 70% opacitet
          border: "2px solid rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "48px",
            textAlign: "center",
            width: "873px",
            height: "306px",
            top: "352px",
            placeItems: "center",
          }}
        >
          Silent. Green. Ecowheelz.
        </div>

        <div style={{ color: "white", fontSize: "24px", textAlign: "center" }}>
          Sustainable transport made easy. Your green ride awaits!
        </div>
        <div> buttons</div>
      </div>
      <ProductCard />
    </div>
  );
}
export default LandingPage;