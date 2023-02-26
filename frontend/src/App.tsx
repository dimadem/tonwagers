// import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { eth_get_address_info } from "./api/requests";
import "./App.css";
// import { walletContext } from "./hooks/walletContext";
// import BuyScreen from "./screens/BuyScreen";
// import CoinScreen from "./screens/CoinScreen";
// import ConfirmTransactionScreen from "./screens/ConfirmTransactionScreen";
// import CreateWalletScreen from "./screens/CreateWalletScreen";
// import ImportWalletScreen from "./screens/ImportWalletScreen";
// import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import CreateContractScreen from "./screens/CreateContractScreen";
import SuccessScreen from "./screens/SuccessScreen";
import AppScreen from "./components/AppScreen";

// import SendScreen from "./screens/SendScreen";
// import SettingsScreen from "./screens/SettingsScreen";
// import SuccessScreen from "./screens/SuccessScreen";
// import SwapScreen from "./screens/SwapScreen";
// import TokenAmountScreen from "./screens/TokenAmountScreen";
// import TokenSelectionScreen from "./screens/TokenSelectionScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import { Wallet } from "./types/wallet";
// import { decrypt } from "./utils/decrypt";

function App() {
  // const [wallets, setWallets] = useState<Wallet[]>([]);
  // useEffect(() => {
  //   const wallets = Cookies.get("wallets");
  //   if (wallets) {
  //     const wallets_parsed = JSON.parse(wallets);
  //     console.log("wallets_parsed");
  //     console.log(wallets_parsed);
  //     setWallets(wallets_parsed);
  //   }
  // }, []);

  // const walletLogic = (wallets: Wallet[]) => {
  //   // decrypting with password
  //   const password = Cookies.get("password");
  //   if (!password) return;

  //   const decryptedWallets = wallets.map((wallet) => {
  //     return {
  //       ...wallet,
  //       privateKey: decrypt(wallet.encryptedPrivateKey, password),
  //     };
  //   });
  //   // setWallets(decryptedWallets);
  //   console.log("decryptedWallets");
  //   console.log(decryptedWallets);
  // };
  // const getEthWalletData = async (ethWallets: Wallet[]) => {
  //   const arrWallets = [];
  //   ethWallets.forEach((wallet) => {
  //     arrWallets.push(wallet.address);
  //   });

  //   try {
  //     const result = (await eth_get_address_info({ addresses: arrWallets })) as any;
  //     if (!result.ok) return;

  //     result.data.forEach((data) => {
  //       const index = wallets.findIndex((wallet) => wallet.address === data.address);
  //       if (index >= 0) {
  //         wallets[index].balance = data.balance;
  //         wallets[index].tokens = data.tokens;
  //       }
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (wallets.length > 0) {
  //     walletLogic(wallets);
  //     const ethWallets = wallets.filter((wallet) => wallet.type === "eth");
  //     if (ethWallets.length > 0) {
  //       getEthWalletData(ethWallets);
  //     }
  //   }
  // }, [wallets]);

  return (
    // <walletContext.Provider value={{ wallets, setWallets }}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={wallets.length > 0 ? <Navigate to="/main" /> : <Navigate to="/welcome" />} /> */}

        <Route path="/main/*" element={<MainScreen />} />
        <Route path="/create_contract/*" element={<CreateContractScreen />} />
        <Route path="/success/*" element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>

    // {/* <WelcomeScreen /> */}
    // {/* <MainScreen /> */}
    // {/* <SettingsScreen /> */}
    // </walletContext.Provider>
  );
}

export default App;
