import { compileFunc, compilerVersion } from "@ton-community/func-js";
import { Cell } from "ton";
// import { Buffers } from "@react-frontend-developer/buffers";
import { useEffect, useState } from "react";
// import stdlib from "../contracts/stdlib.fc";
// import counter from "../contracts/counter.fc";

export default function ContractCompiler() {
  const [stdlibState, setStdlib] = useState("");
  const [counterState, setCounter] = useState("");

  // reads file contents synchronously in client-side
  const fetchFuncData = async () => {
    try {
      let stdlib = await fetch("../src/contracts/stdlib.fc").then((response) =>
        response.text()
      );
      setStdlib(stdlib);
      // console.log("FETCH ONLY:", stdlib);
      // console.log("FETCH STDLIB:::", stdlib);

      let counter = await fetch("../src/contracts/counter.fc").then(
        (response) => response.text()
      );
      setCounter(counter);
      // console.log("FETCH COUNTER:::", counter);
    } catch (error) {
      console.error(error);
    }
  };

  const compilerFunc = async () => {
    try {
      let version = await compilerVersion();
      console.log("Compiler Version:", version);

      // State Consoles
      console.log("stdlibState", stdlibState);
      console.log("counterState", counterState);

      let result = await compileFunc({
        // Sources
        sources: [
          {
            filename: "stdlib.fc",
            content: stdlibState,
          },
          {
            filename: "counter.fc",
            content: counterState,
          },
          // The rest of the files which are included in counter.fc if any
        ],
      });

      console.log("RESULT::", result);
      // console.log("RESULT::", result.codeBoc);
      if (result.status === "error") {
        console.error(result.message);
        return;
      }

      // Contract code cell
      let codeCell = result.codeBoc.toString("base64");

      // result.fiftCode contains assembly version of your code (for debug purposes)
      console.log("CODECELL::", codeCell);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFuncData();
  }, []);

  // return
  return (
    <div>
      <button onClick={compilerFunc}>Compile</button>
    </div>
  );
}
