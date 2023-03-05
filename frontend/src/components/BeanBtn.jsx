import { ArrowDownRight, ArrowUpRight } from "react-feather";
import colors from "../constants/colors";
import TextSub2 from "../text/TextSub2";
import Icon from "./Icon";

function BeanBtn({
  style,
  children,
  title,
  iconTitle,
  backgroundColor = colors.lightBlue,
  textColor = colors.main,
  iconSize = 12,
  onClick,
  wide,
  iconStrokeWidth,
  value = 11.2,
}) {
  return (
    <div
      id="bean-btn"
      style={{
        backgroundColor: backgroundColor,
        padding: wide ? "12px 15px" : "5px 10px",
        borderRadius: wide ? 35 : 15,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
      <TextSub2 medium color={textColor} style={{ marginRight: 2 }}>
        {title}
      </TextSub2>
      {iconTitle && (
        <Icon
          name={iconTitle}
          size={iconSize}
          strokeWidth={3}
          color={textColor}
          strokeWidth={iconStrokeWidth}
          style={wide && { position: "relative", left: 65, alighnSelf: "center" }}
        />
      )}
    </div>
  );
}
export default BeanBtn;
