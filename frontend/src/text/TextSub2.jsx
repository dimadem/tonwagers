import React from "react";
import colors from "../constants/colors";

function TextSub2({ children, style, bold, medium, color = colors.grey }) {
  return (
    <>
      <div style={{}}>
        <h2 style={{ color: color, fontWeight: bold ? 600 : medium ? 500 : 400, fontSize: 16, lineHeight: 1.2, margin: 0, ...style }}>{children}</h2>
      </div>
    </>
  );
}

export default TextSub2;
