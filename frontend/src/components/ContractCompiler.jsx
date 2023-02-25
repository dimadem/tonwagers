import { compileFunc, compilerVersion } from "@ton-community/func-js";
import { Cell } from "ton";
import { useEffect, useState } from "react";
import fs from "fs";
// import stdlib from "../contracts/stdlib.fc";
// import counter from "../contracts/counter.fc";

export default function ContractCompiler() {
  const [stdlibState, setStdlib] = useState("");
  const [counterState, setCounter] = useState("");

  // reads file contents synchronously in client-side
  const fetchFuncData = async () => {
    try {
      let stdlib = fetch("../src/contracts/stdlib.fc").then((response) =>
        setStdlib(response.text().toString())
      );

      // console.log("stdlib:::", stdlib);

      // let stdlib = await fetch("../src/contracts/stdlib.fc").then((response) =>
      //   response.text().toString()
      // );

      // console
      // console.log("stdlib:::", stdlib);

      let counter = await fetch("../src/contracts/counter.fc").then(
        (response) => response.text().toString()
      );
      setCounter(counter);
      // console
      // console.log("COUNTER:::", counter);
    } catch (error) {
      console.error(error);
    }
  };

  const compilerFunc = async () => {
    try {
      let version = await compilerVersion();
      console.log(version);
      //
      let result = await compileFunc({
        targets: ["counter.fc"],
        // Sources
        sources: {
          "counter.fc": stdlibState,

          "stdlib.fc": counterState,
        },
        // The rest of the files which are included in main.fc if any
      });

      if (result.status === "error") {
        console.error(result.message);
        return;
      }

      // result.codeBoc contains base64 encoded BOC with code cell
      let codeCell = Cell.fromBoc(Buffer.from(result.codeBoc, "base64"))[0];

      // result.fiftCode contains assembly version of your code (for debug purposes)
      console.log(result.fiftCode);
    } catch (error) {
      console.log(error);
    }
  };

  const run = async () => {
    await fetchFuncData();
    await compilerFunc();
  };

  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    console.log("stdlibState:::", stdlibState);
    console.log("counterState:::", counterState);
  }, [stdlibState, counterState]);

  // return
  return <div></div>;
}
