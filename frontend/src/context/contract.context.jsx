import { createContext, useState } from "react";
//create context
export const ContractContext = createContext();
// create provider and put data

export const ContractContextProvider = ({ children }) => {
  // contract state
  const [contractState, setContractState] = useState([
    // триггер
    { Trigger: false },
    // адрес кошелька
    { WalletAddress: "" },
    // boc контракта
    { BocContract: "" },
  ]);

  // set tree state
  const setContract = (data) => {
    setContractState(data);
  };

  return (
    <ContractContext.Provider value={{ contract: contractState, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};
