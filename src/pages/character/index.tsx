import { useEffect, useState } from "react";
import { CharacterItem } from "../../components/CharacterItem";
import { ICharacters } from "../../interfaces/ICharacter";
import { getCharacterById } from "../../api";
import { Link, useParams } from "react-router-dom";

import styles from "./index.module.css";

export const Character = () => {
  const [character, setCharacter] = useState<ICharacters | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await getCharacterById(id);

      setCharacter(response);
    };

    fetch();
  }, []);

  return (
    <>
      <Link to={`/`}>На главную</Link>
      <main className="main">
        <section className="character">
          <article className={styles.item}>
            {character && (
              <CharacterItem
                image={character?.image}
                name={character?.name}
                id={character.id}
                created={character.created}
                status={character.status}
              />
            )}
          </article>
        </section>
      </main>
    </>
  );
};
