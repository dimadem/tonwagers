import { useLocation, useNavigate } from "react-router-dom";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import BeanBtn from "../components/BeanBtn";
import Icon from "../components/Icon";
import colors from "../constants/colors";
import TextH2 from "../text/TextH2";
import TextSub2 from "../text/TextSub2";

function CreateContractScreen({ children, style }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { scheme } = state;
  return (
    <AppScreen style={{ padding: 30 }}>
      <div style={{ flexDirection: "row", marginBottom: 10 }}>
        <Icon name={scheme.iconName} color={scheme.iconColor} style={{ marginRight: 5 }} />
        <TextH2 bold>{scheme.title}</TextH2>
      </div>
      <TextSub2 color={colors.darkGrey}>Contract from template</TextSub2>
      <div style={{ marginTop: 50 }}>
        <AppTextInput
          multiline
          title=" Contract description"
          placeholder="Your description"
          style={{ marginBottom: 5 }}
          inputStyle={{ height: 60, paddingTop: 5, alignItems: "flex-start" }}
        />
        <AppTextInput
          title="Donation type"
          placeholder="Your description"
          style={{ marginBottom: 5 }}
          inputStyle={{ height: 50, alignItems: "flex-start" }}
        />
        <AppTextInput
          title="When to distribute funds"
          placeholder="When capital reaches 100000"
          style={{ marginBottom: 5 }}
          inputStyle={{ height: 50, alignItems: "flex-start" }}
        />
        <AppTextInput
          title="Beneficiary address(es)"
          placeholder="0x39393939393"
          style={{ marginBottom: 5 }}
          inputStyle={{ height: 50, alignItems: "flex-start" }}
        />
        <BeanBtn title="Add another one +" style={{ alignSelf: "flex-end", marginTop: 10 }} />
        <BeanBtn
          title="Deploy a contract"
          iconTitle="ArrowRight"
          textColor={colors.lighterBlue}
          iconSize={25}
          iconStrokeWidth={2}
          backgroundColor={colors.main}
          wide
          style={{ marginTop: 30 }}
          onClick={() => navigate("/success", { state: { scheme } })}
        />
      </div>
    </AppScreen>
  );
}

export default CreateContractScreen;
