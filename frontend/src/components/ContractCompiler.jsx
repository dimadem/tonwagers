import { compileFunc, compilerVersion } from "@ton-community/func-js";
import { useEffect, useState } from "react";

export default function ContractCompiler() {
  const [stdlibState, setStdlib] = useState("");
  const [counterState, setCounter] = useState("");
  const [counterCodeCell, setCounterCodeCell] = useState("");

  // reads file contents synchronously in client-side
  const fetchFuncData = async () => {
    try {
      let stdlib = await fetch("../src/contracts/stdlib.fc").then((response) =>
        response.text()
      );
      setStdlib(stdlib);

      let counter = await fetch("../src/contracts/counter/counter.fc").then(
        (response) => response.text()
      );
      setCounter(counter);
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

      if (result.status === "error") {
        console.error(result.message);
        return;
      }

      // Contract code bag of cells
      let codeCell = result.codeBoc.toString("base64");
      setCounterCodeCell(codeCell);

      // result.fiftCode contains assembly version of your code (for debug purposes)
      console.log("CODECELL::", codeCell);
      console.log("COUNTER CODE CELL", counterCodeCell);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFuncData();
  }, []);

  return (
    <div>
      <button onClick={compilerFunc}>Compile</button>
    </div>
  );
}
