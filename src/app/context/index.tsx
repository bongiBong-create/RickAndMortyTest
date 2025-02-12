import { ChangeEvent, createContext, FC, ReactNode, useState } from "react";
import { ICharacters } from "../../interfaces/ICharacter";
import { IContext } from "../../interfaces/IContext";

export const AppContext = createContext<IContext>({
  characters: [],
  setCharacters: () => {},
  searchCharacter: "",
  change: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(e.target.value);
  };

  return (
    <AppContext value={{ characters, searchCharacter, change, setCharacters }}>
      {children}
    </AppContext>
  );
};
