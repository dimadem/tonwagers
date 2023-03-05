import { useLocation, useNavigate } from "react-router-dom";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import BeanBtn from "../components/BeanBtn";
import Icon from "../components/Icon";
import colors from "../constants/colors";
import TextH2 from "../text/TextH2";
import TextSub2 from "../text/TextSub2";

function SuccessScreen({ children, style }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { scheme } = state;
  return (
    <AppScreen style={{ alignItems: "center", justifyContent: "center", paddingBottom: 100 }}>
      <div style={{ backgroundColor: colors.lightBlue, height: 110, width: 110, justifyContent: "center", alignItems: "center", borderRadius: 60 }}>
        <Icon name="Check" color={colors.main} size={55} />
      </div>
      <TextH2 style={{ marginBottom: 20, marginTop: 20 }} medium>
        Contract deployed!
      </TextH2>
      <div style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Icon name={scheme.iconName} size={24} color={scheme.iconColor} style={{ marginRight: 5 }} />
        <TextSub2 color={colors.darkGrey} medium>
          Contract created!
        </TextSub2>
      </div>
      <div className="cardShadow" style={{ marginTop: 40, width: "70%", border: `1px ${colors.lightGrey} solid` }}>
        <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextSub2 color={colors.darkGrey} medium>
            Share via QR code
          </TextSub2>
          <Icon name="Share" size={18} color={colors.darkGrey} />
        </div>
        <div style={{ height: 150, width: 150, backgroundColor: colors.lighterGrey, alignSelf: "center", marginTop: 20 }} />
      </div>
    </AppScreen>
  );
}

export default SuccessScreen;
