import AppScreen from "../components/AppScreen";
import MainCard from "../components/MainCard";
import WagerCard from "../components/WagerCard";
import colors from "../constants/colors";
import TextH2 from "../text/TextH2";
import TextSub2 from "../text/TextSub2";
import { useNavigate } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
function MainScreen({ children, style }) {
  const navigate = useNavigate();
  const contractSchemes = [
    { title: "Donations", subtitle: "Raise money for the good cause, distributing donations automatically", iconName: "Plant", iconColor: "#45B742" },
    { title: "Sports bets", subtitle: "Bet on your sports claims and let others join you!", iconName: "BallFootball", iconColor: "#E47575" },
    {
      title: "Escrow",
      subtitle: "Create a secure and transparent way to hold funds in escrow until certain conditions are met.",
      iconName: "BuildingBank",
      iconColor: "#2D9CDB",
    },
    { title: "Auction", subtitle: "Host an auction with automatic money transfers to the highest bidder.", iconName: "Hammer", iconColor: "#83401B" },
    {
      title: "Tokent sales",
      subtitle:
        "Create a token and sell it to interested investors, with the smart contract automatically handling the distribution and transfer of tokens.",
      iconName: "CurrencyBitcoin",
      iconColor: "#F4B73F",
    },

    {
      title: "Real estate",
      subtitle: "Buy or sell real estate, with automatic transfers of ownership and funds.",
      iconName: "BuildingCommunity",
      iconColor: "#575757",
    },
    {
      title: "Employment",
      subtitle: "Create an employment contract with predetermined terms, with automatic payment of wages and bonuses.",
      iconName: "User",
      iconColor: "#2D9CDB",
    },
  ];

  return (
    <AppScreen style={{ alignItems: "center" }}>
      <TonConnectButton/>
      <div style={{ padding: "20px 20px", paddingBottom: 40 }}>
        <div style={{ width: "80%", paddingLeft: 30, marginBottom: 60, marginTop: 20 }}>
          <TextH2 bold style={{}}>
            Create a contranct
          </TextH2>
          <TextSub2 style={{}} medium>
            use a template to start building your contract
          </TextSub2>
        </div>
        {contractSchemes.map((scheme, i) => {
          return (
            <MainCard
              key={i.toString()}
              title={scheme.title}
              subtitle={scheme.subtitle}
              iconName={scheme.iconName}
              iconColor={scheme.iconColor}
              onClick={() => navigate("/create_contract", { state: { scheme } })}
            />
          );
        })}
      </div>
      {/* <WagerCard /> */}
    </AppScreen>
  );
}

export default MainScreen;
