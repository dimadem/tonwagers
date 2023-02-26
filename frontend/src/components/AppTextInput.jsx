import colors from "../constants/colors";
import TextSub2 from "../text/TextSub2";

function AppTextInput({ style, children, onClick, value = 11.2, title = "title", inputStyle, placeholder = "0x5f3A...B31a", multiline, ...props }) {
  return (
    <div style={{ ...style }}>
      {title && (
        <TextSub2 medium color={colors.black} style={{ marginTop: 20, marginBottom: 5 }}>
          {title}
        </TextSub2>
      )}
      {!multiline ? (
        <input
          id="text-input"
          placeholder={placeholder}
          // placeholderStyle={{  }}
          style={{ lineHeight: 2.5, justifyContent: "center", alignItems: "center", ...inputStyle }}
          // secureTextEntry={true}

          {...props}
        />
      ) : (
        <textarea
          id="text-input"
          placeholder={placeholder}
          // placeholderStyle={{  }}
          style={{ lineHeight: 2.5, justifyContent: "center", alignItems: "center", ...inputStyle }}
          // secureTextEntry={true}

          {...props}
        />
      )}
    </div>
  );
}
export default AppTextInput;
