import React from "react";
import colors from "../constants/colors";

function TextH2({ children, style, bold, medium, color = colors.black }) {
  return (
    <>
      <div style={{}}>
        <h2 style={{ color: color, fontWeight: bold ? 600 : medium ? 500 : 400, fontSize: 24, lineHeight: 1.2, margin: 0, ...style }}>{children}</h2>
      </div>
    </>
  );
}

export default TextH2;
