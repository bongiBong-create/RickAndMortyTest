import { useEffect, useState } from "react";
import { getCharacterById } from "../../api";
import { useParams } from "react-router-dom";
import { ICharacters } from "../../interfaces/ICharacter";

export const useCharacter = () => {
  const { id } = useParams()

  const [isLoading, setLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<ICharacters | null>(null);

  useEffect(() => {

    if (!id) return;

    const fetch = async () => {
      try {
        setLoading(true);
        const response = await getCharacterById(id);

        setCharacter(response);
        setLoading(false)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    };

    fetch();
  }, []);

  return {
    character,
    id,
    isLoading
  }
}