import React from "react";


function Spinner (props) {
return (
<div
  style={{
    display: "block",
    position: "absolute",
    left: 0,
    right: 0,
    background: "rgba(255,255,255,0.8)",
    transition: "all .3s ease",
    top: 0,
    bottom: 0,
    textAlign: "center"
  }}
>
  <h1>Loading</h1>
</div>
)
}

export default Spinner;
