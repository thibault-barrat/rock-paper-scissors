import { createContext, useState } from "react";

type DifficultyContextType = {
  isHard: boolean;
  toggleDifficulty: () => void;
}

export const DifficultyContext = createContext<DifficultyContextType>({isHard: false, toggleDifficulty: () => {}});

type Props = {
  children: React.ReactNode;
};

export const DifficultyProvider = ({ children }: Props) => {
  const [isHard, setIsHard] = useState(false);
  const toggleDifficulty = () => setIsHard(!isHard);
  return (
      <DifficultyContext.Provider value={{ isHard, toggleDifficulty }}>
          {children}
      </DifficultyContext.Provider>
  )
};