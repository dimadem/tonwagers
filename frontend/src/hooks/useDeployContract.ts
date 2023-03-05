// import * as fs from "fs";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Cell, WalletContractV4 } from "ton";
import { mnemonicToWalletKey } from "ton-crypto";
import Counter from "../contracts/counter/counter"; // this is the interface class from step 7
import { useEffect } from "react";



export default function useDeployContract({ WalletAddress, BocContract }) {

  // console.log("BOC", BocContract)
  // функция деплоя контракта
  async function deploy() {
    // initialize ton rpc client on testnet
    const endpoint = await getHttpEndpoint({ network: "testnet" });
    const client = new TonClient({ endpoint });
    // console.log("client", client)
    // prepare Counter's initial code and data cells for deployment
    const counterCode = Cell.fromBase64(BocContract); // compilation output from step 6
    const initialCounterValue = Date.now(); // to avoid collisions use current number of milliseconds since epoch as initial value
    // console.log("initialCounterValue", initialCounterValue);

    //! create a contract interface for deployment
    const counter = Counter.createForDeploy(counterCode, initialCounterValue);
    console.log("COUNTER:::", counter)


    // exit if contract is already deployed
    console.log("contract address:", counter.address.toString());
    if (await client.isContractDeployed(counter.address)) {
      return console.log("Counter already deployed");
    }

    // open wallet v4 (notice the correct wallet version here)
    const mnemonic = "power airport clump track humor stove magic spatial bright salt butter laugh pudding milk pen elite odor quote version miss mushroom twice drink noise"; // your 24 secret words (replace ... with the rest of the words)
    const key = await mnemonicToWalletKey(mnemonic.split(" "));

    const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });
    console.log("mnemonic", mnemonic)

    if (!await client.isContractDeployed(wallet.address)) {
      return console.log("wallet is not deployed");
    }

    // open wallet and read the current seqno of the wallet
    const walletContract = client.open(wallet);
    const walletSender = walletContract.sender(key.secretKey);
    const seqno = await walletContract.getSeqno();

    // send the deploy transaction
    const counterContract = client.open(counter);
    await counterContract.sendDeploy(walletSender);

    // wait until confirmed
    let currentSeqno = seqno;
    while (currentSeqno == seqno) {
      console.log("waiting for deploy transaction to confirm...");
      await sleep(1500);
      currentSeqno = await walletContract.getSeqno();
    }
    console.log("deploy transaction confirmed!");
  }

  // запуск функции deploy при монтировании компонента
  useEffect(() => {
    deploy();
  }, [BocContract]);


  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}