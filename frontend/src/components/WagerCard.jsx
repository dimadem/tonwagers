import colors from "../constants/colors";
import TextSub2 from "../text/TextSub2";
import TextH2 from "../text/TextH2";
import BeanTag from "./BeanTag";
import { ThumbsDown, ThumbsUp } from "react-feather";
import { useState } from "react";
import AppModal from "./AppModal";

function WagerCard({ children, style }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedToken, setSelectedToken] = useState("TON");

  const tokensData = [
    { title: "TON", onClick: () => setSelectedToken("TON") },
    { title: "Bitcoin", onClick: () => setSelectedToken("BTC") },
    { title: "Ethereum", onClick: () => setSelectedToken("ETH") },
    { title: "Solana", onClick: () => setSelectedToken("SOL") },
    { title: "MATIC", onClick: () => setSelectedToken("MATIC") },
  ];

  return (
    <div
      className="cardShadow"
      style={{
        hight: 100,
        ...style,
      }}
    >
      <div style={{ flexDirection: "row", alignItems: "center" }}>
        <div style={{ width: 24, height: 24, backgroundColor: colors.mediumGrey, borderRadius: 20, marginRight: 10 }} />
        <TextSub2 medium> 0x4920...49494</TextSub2>
      </div>
      <div style={{ marginTop: 20, flexWrap: "wrap" }}>
        <div style={{ flexDirection: "row", alignItems: "center" }}>
          <TextH2 medium>I’m betting </TextH2>
          <BeanTag style={{ marginLeft: 10, marginRight: 10 }} onClick={() => setModalVisible(true)} value={`15 ${selectedToken}`} />
          <TextH2 medium> , that </TextH2>
        </div>
        <div style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
          <BeanTag style={{ marginRight: 10 }} value={selectedToken} onClick={() => setModalVisible(true)} />
          <TextH2 medium style={{}}>
            {" "}
            will be{" "}
          </TextH2>
          <BeanTag style={{ marginLeft: 10 }} value="3$ or over" />
        </div>
        <div style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
          <TextH2 medium>by </TextH2>
          <BeanTag style={{ marginLeft: 10 }} value={"15 March, 2023"} />
        </div>
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: colors.lighterGrey, marginTop: 20, marginBottom: 30 }} />
      <div style={{ flexDirection: "row", alignItems: "center" }}>
        <div style={{ alignItems: "flex-end" }}>
          <TextSub2 bold color={colors.main} style={{ marginBottom: 5 }}>
            100 {selectedToken}
          </TextSub2>
          <TextSub2 bold color={colors.mediumBlue}>
            40 {selectedToken}
          </TextSub2>
        </div>
        <div style={{}}>
          <ThumbsUp strokeWidth={2.5} size={14} color={colors.main} style={{ marginLeft: 7, marginRight: 7 }} />
          <div style={{ height: 13 }} />
          <ThumbsDown strokeWidth={2.5} size={14} color={colors.mediumBlue} style={{ marginLeft: 7, marginRight: 7 }} />
        </div>
        <div style={{ alignItems: "flex-start" }}>
          <div style={{ width: 100, backgroundColor: colors.main, borderRadius: 8, height: 12 }} />
          <div style={{ height: 13 }} />

          <div style={{ width: 40, backgroundColor: colors.mediumBlue, borderRadius: 8, height: 12 }} />
        </div>
      </div>
      {/* {modalVisible && <div style={{ position: "absolute", height: "100vh", width: "100vw", backgroundColor:"rgba(0,0,0,0.6)"}}></div>} */}
      <AppModal visible={modalVisible} setVisible={setModalVisible} data={tokensData} title="Select"></AppModal>
      {/* {children} */}
    </div>
  );
}

export default WagerCard;
