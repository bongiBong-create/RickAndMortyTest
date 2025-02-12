import { useContext, useEffect } from "react";
import { IContext } from "../../interfaces/IContext";
import { AppContext } from "../../app/context";
import { getCharactersBySearch } from "../../api";

export const useList = () => {
  const { characters, searchCharacter, setCharacters } =
    useContext<IContext>(AppContext);

  useEffect(() => {
    if (searchCharacter.length < 4) {
      return;
    }

    const debounce = setTimeout(async () => {
      try {
        const response = await getCharactersBySearch(
          searchCharacter.toLocaleLowerCase()
        );

        setCharacters(response);
      } catch (e) {
        console.log(e);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchCharacter]);

  return {
    characters
  }
}