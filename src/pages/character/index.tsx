import { CharacterItem } from "../../components/CharacterItem";
import { Loader } from "../../components/Loader";
import { useCharacter } from "./hook";

import styles from "./index.module.css";

export const Character = () => {
  const { character, isLoading } = useCharacter();

  return (
    <>
      <main className={styles.main}>
        <section className={styles.character}>
          <article className={styles.item}>
            {isLoading && <Loader />}
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
