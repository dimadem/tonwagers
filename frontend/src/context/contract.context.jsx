import { createContext, useState } from "react";
//create context
export const ContractContext = createContext();
// create provider and put data

export const ContractContextProvider = ({ children }) => {
  //  contract state
  const [contractState, setContractState] = useState([
    { Trigger: false },

    { BackgroundColor: [] },

    { GlobalIterations: 0 },

    { TreeFormula: "" },
    { TreeIterations: 0 },
    { TreeTrunkColor: [] },
    { TreeCrownColor: [] },
    { TreeAngle: 0 },
    { TreeLength: 0 },
    { TreeLengthModifier: 0.0 },
    { TreeStrokeWeight: 0 },
    { TreeScale: 1 },
    { TreePosition: [] },

    { PatternFormula: "" },
    { PatternIterations: 0 },
    { PatternColor: [] },
    { PatternAngle: 0 },
    { PatternLength: 0 },
    { PatternLengthModifier: 0 },
    { PatternStrokeWeight: 0 },
    { PatternScale: 1 },
    { PatternPosition: [] },
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
