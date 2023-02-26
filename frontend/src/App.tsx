import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import ContractCompiler from "./components/ContractCompiler";
import { ContractContextProvider } from "./context/contract.context";
import { WalletConnector } from "./components/WalletConnector";
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';
import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';





function App(pageProps: any) {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();


  return (
    <ContractContextProvider {...pageProps} >
      <div>
        {/* connect button */}
        <TonConnectButton />
        {/* compile contract button */}
        <ContractCompiler />

        <div>
          <span>User-friendly address: {userFriendlyAddress}</span>
          <span>Raw address: {rawAddress}</span>
        </div>

        {/* wallet name */}
        {wallet && <div>
          <span>Connected wallet: {wallet.name}</span>
          {/* <span>Device: {wallet.device.appName}</span> */}
        </div>}


        {/* counter CONTRACT */}
        <div>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
    </ContractContextProvider>
  );
}

export default App;


