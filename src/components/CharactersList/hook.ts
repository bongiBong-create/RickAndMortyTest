import { useContext, useEffect, useState } from "react";
import { IContext } from "../../interfaces/IContext";
import { AppContext } from "../../app/context";
import { getCharactersBySearch } from "../../api";

export const useList = () => {
  const { characters, searchCharacter, setCharacters } =
    useContext<IContext>(AppContext);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchCharacter.length < 4) {
      setError(null)
      return;
    }

    setError(null)
    setCharacters([])

    const debounce = setTimeout(async () => {
      try {
        const response = await getCharactersBySearch(
          searchCharacter.toLocaleLowerCase()
        );

        setCharacters(response);
      } catch (e) {
        console.log(e);
        setError("Введите корректного персонажа")
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchCharacter]);

  return {
    characters,
    error
  }
}