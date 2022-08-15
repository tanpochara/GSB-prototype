import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Props {
  selectedLottery: string[];
  setSelectedLottery: Dispatch<SetStateAction<string[]>>;
  availableNumber: string[];
}

const LotteryContext = createContext<Props>({
  selectedLottery: [] as string[],
  setSelectedLottery: () => {},
  availableNumber: [] as string[],
});

export const LotteryContextProvider = ({ children }: { children: any }) => {
  const [selectedLottery, setSelectedLottery] = useState<string[]>([]);
  const availableNumber = Array.from(Array(1000).keys()).map((number) =>
    number.toString()
  );
  const value = {
    selectedLottery,
    setSelectedLottery,
    availableNumber,
  };

  return (
    <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>
  );
};

export default LotteryContext;
