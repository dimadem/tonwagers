import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import ContractCompiler from "./components/ContractCompiler";
import { ContractContextProvider } from "./context/contract.context";




function App(pageProps: any) {
  return (
    <ContractContextProvider {...pageProps} >
      <div>
        <ContractCompiler />
        <TonConnectButton />
      </div>
    </ContractContextProvider>
  );
}

export default App;


