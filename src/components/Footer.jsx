import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function Footer() {
  return (
    //   <main style={{width:"100vw", textAlign:"center", marginTop:"4rem"}}>
    <footer style={{position:"relative", display:"flex", flexDirection:"column", width:"100vw",   marginLeft: "3em", marginTop: "6em" }}>
      <h1>Join Us!</h1>
      <p style={{ marginTop: "2em" }}>
        Catch new feature developments <br /> and stories from the community
      </p>
        <div>
            <PrimaryButton />
        </div>
        <div style={{position:"absolute", bottom:"10px", right:"6rem"}}>
            <span >
            CREATED BY THE EMERALD CITY DAO

            </span>
        </div>
    </footer>
  );
}
