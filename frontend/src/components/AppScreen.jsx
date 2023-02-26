import colors from "../constants/colors";

function AppScreen({ children, style }) {
  return <div style={{ backgroundColor: colors.white, padding: 20, height: "100vh", width: "100vw", ...style }}>{children}</div>;
}

export default AppScreen;
