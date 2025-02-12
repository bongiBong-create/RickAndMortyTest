import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../api";
import { ICharacters } from "../../interfaces/ICharacter";

export const useCharacter = () => {

  const [character, setCharacter] = useState<ICharacters | null>(null);
  const { id } = useParams();

  useEffect(() => {
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