import colors from "../constants/colors";
import TextH2 from "../text/TextH2";
import TextSub2 from "../text/TextSub2";

function BeanTag({ style, color = colors.lightGrey, children, textColor = colors.black, onClick, value = "15 TON" }) {
  return (
    <div
      id="bean-tag"
      style={{
        backgroundColor: color,
        alignSelf: "flex-start",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
      <TextH2 medium color={textColor} style={{ marginLeft: 2 }}>
        {value}
      </TextH2>
    </div>
  );
}
export default BeanTag;
