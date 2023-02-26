import "./App.css";
import { ContractContextProvider } from "./context/contract.context";
import ContractPage from "./pages/contract.page";





// address of the contract
// kQCSiCOv9TLcciwqqVQbWL121juPFcqmkVhSif-NSpd3WGEt

function App(pageProps: any) {


  return (
    <ContractContextProvider {...pageProps}>
      <ContractPage />
    </ContractContextProvider>

  );
}

export default App;


