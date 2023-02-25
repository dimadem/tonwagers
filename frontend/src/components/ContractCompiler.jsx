import { compileFunc, compilerVersion } from "func-js";
import { Cell } from "ton";
import stdlib from "../contracts/stdlib.fc";
import counter from "../contracts/counter.fc";

export async function ContractCompiler() {
  // You can get compiler version
  let version = await compilerVersion();

  // let result = await compileFunc({
  //   // Targets of your project
  //   targets: ["counter.fc"],
  //   // Sources
  //   sources: {
  //     "stdlib.fc": `${stdlib}`,
  //     "counter.fc": `${counter}`,
  //     // The rest of the files which are included in main.fc if any
  //   },
  // });

  //
  let result = await compileFunc({
    // Sources
    sources: [
      {
        filename: "stdlib.fc",
        content: "<stdlibCode>",
      },
      {
        filename: "main.fc",
        content: "<contractCode>",
      },
      // The rest of the files which are included in main.fc if any
    ],
  });

  if (result.status === "error") {
    console.error(result.message);
    return;
  }

  // result.codeBoc contains base64 encoded BOC with code cell
  let codeCell = Cell.fromBoc(Buffer.from(result.codeBoc, "base64"))[0];

  // result.fiftCode contains assembly version of your code (for debug purposes)
  console.log(result.fiftCode);

  return <> {result.fiftCode}</>;
}
