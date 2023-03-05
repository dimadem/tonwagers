import colors from "../constants/colors";
import TextH2 from "../text/TextH2";
import TextSub1 from "../text/TextSub1";
import TextSub2 from "../text/TextSub2";

function AppModal({
  style,
  color = colors.lightGrey,
  children,
  textColor = colors.black,
  onClick,
  value = "15 TON",
  visible,
  setVisible,
  data,
  title,
}) {
  return (
    <div className={visible ? "fadeIn" : "fadeOut"} onClick={() => setVisible(false)}>
      <div style={{ backgroundColor: colors.white, borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingTop: 15, padding: 20 }}>
        {title && (
          <TextH2 bold style={{ marginBottom: 10 }}>
            {title}
          </TextH2>
        )}
        {data &&
          data.map((item) => {
            return (
              <div onClick={item.onClick} style={{ paddingBottom: 10, paddingTop: 10 }}>
                <TextSub1 color={colors.black}>{item.title}</TextSub1>
              </div>
            );
          })}
        {data && <div style={{ backgroundColor: colors.lighterGrey, width: "90%", height: 1, marginTop: 10, marginBottom: 15 }} />}
        <div onClick={() => setVisible(false)} style={{ width: "100%", justifyContent: "center", alignItems: "center", padding: 10 }}>
          <TextSub2>Cancel</TextSub2>
        </div>
      </div>
      {/* {children} */}
    </div>
  );
}
export default AppModal;
