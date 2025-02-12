import { useEffect, useState } from "react";
import { getCharacterById } from "../../api";
import { useParams } from "react-router-dom";
import { ICharacters } from "../../interfaces/ICharacter";

export const useCharacter = () => {
  const { id } = useParams()

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