import { compileFunc, compilerVersion } from "@ton-community/func-js";
import { Cell } from "ton";
import { useEffect } from "react";
import fs from "fs";
import stdlib from "../contracts/stdlib.fc";
import counter from "../contracts/counter.fc";

export default function ContractCompiler() {
  const compilerFunc = async () => {
    try {
      let version = await compilerVersion();
      console.log(version);

      // You can get compiler version

      // let result = await compileFunc({
      //   // Targets of your project
      //   targets: ["counter.fc"],
      //   // Sources
      //   sources: {
      //     "stdlib.fc": stdlib,
      //     "counter.fc": counter,
      //     // The rest of the files which are included in main.fc if any
      //   },
      // });

      let result = await compileFunc({
        // Sources
        sources: [
          {
            filename: "stdlib.fc",
            content: stdlib,
          },
          {
            filename: "main.fc",
            content: counter,
          },
          // The rest of the files which are included in main.fc if any
        ],
      });

      //
      // let result = await compileFunc({
      //   // Sources
      //   sources: [
      //     {
      //       filename: "stdlib.fc",
      //       content: fs.readFileSync(stdlib, {
      //         encoding: "utf-8",
      //       }),
      //     },
      //     {
      //       filename: "counter.fc",
      //       content: fs.readFileSync(counter, {
      //         encoding: "utf-8",
      //       }),
      //     },
      //     // The rest of the files which are included in main.fc if any
      //   ],
      // });

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

  useEffect(() => {
    compilerFunc();
  }, []);

  // return
  return <div></div>;
}
