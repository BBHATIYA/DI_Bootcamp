import React from "react";
// import * as Loader from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <TailSpin type="Plane" color="#343e47" height={100} width={100} />
    </div>
  );
}

export default Preloader;
