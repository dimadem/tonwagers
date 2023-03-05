import colors from "../constants/colors";
import TextSub2 from "../text/TextSub2";
import TextH2 from "../text/TextH2";
import BeanTag from "./BeanTag";
import { ThumbsDown, ThumbsUp } from "react-feather";
import { useState } from "react";
import AppModal from "./AppModal";
// import { Plant } from "tabler-icons-react";
import Icon from "./Icon.tsx";

function MainCard({
  children,
  style,
  title = "Donations",
  subtitle = " Raise money for the good cause, distributing donations automatically",
  iconName = "Plant",
  iconColor,
  onClick = { onClick },
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedToken, setSelectedToken] = useState("TON");

  return (
    <div className="cardShadow" style={{ border: `1px solid ${colors.lightGrey}`, marginBottom: 15, ...style }} onClick={onClick}>
      <div style={{ flexDirection: "row" }}>
        <Icon name={iconName} size={24} color={iconColor} style={{ marginRight: 5 }} />
        <TextH2 color={colors.black} bold>
          {title}
        </TextH2>
      </div>
      <TextSub2 style={{ marginTop: 10 }} color={colors.darkGrey}>
        {subtitle}
      </TextSub2>
    </div>
  );
}

export default MainCard;
