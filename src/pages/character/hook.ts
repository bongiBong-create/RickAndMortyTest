import { useEffect, useState } from "react";
import { getCharacterById } from "../../api";
import { ICharacters } from "../../interfaces/ICharacter";

export const useCharacter = (id: string) => {

  const [character, setCharacter] = useState<ICharacters | null>(null);

  useEffect(() => {

    if (!id) return;

    const fetch = async () => {
      const response = await getCharacterById(id);

      setCharacter(response);
    };

    fetch();
  }, []);

  return {
    character,
    id,
  }
}