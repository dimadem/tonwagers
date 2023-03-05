import React from "react";
import colors from "../constants/colors";

function TextH1({ children, style, bold = true, medium, color = colors.black }) {
  return (
    <>
      <div>
        <h2 style={{ color: color, fontWeight: medium ? 500 : bold ? 600 : 400, fontSize: 32, lineHeight: 1.2, margin: 0, ...style }}>{children}</h2>
      </div>
    </>
  );
}

export default TextH1;
