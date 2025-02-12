import { CharacterItem } from "../../components/CharacterItem";
import { useParams } from "react-router-dom";
import { useCharacter } from "./hook";

import styles from "./index.module.css";

export const Character = () => {
  const { id } = useParams();
  const { character } = useCharacter(id);

  return (
    <>
      <main className="main">
        <section className={styles.character}>
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
