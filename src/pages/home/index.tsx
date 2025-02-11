import { useEffect, useRef, useState } from "react";
import { getCharactersBySearch } from "../../api";

import { ICharacters } from "../../interfaces/ICharacter";

import { CharactersList } from "../../components/CharactersList";

import styles from "./index.module.css";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacters[] | []>([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const change = (e) => {
    setSearchCharacter(e.target.value);
  };

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchCharacter.length < 3) {
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

  return (
    <>
      <header className={styles.header}>
        <div className={styles.search}>
          <input
            ref={searchRef}
            onChange={change}
            value={searchCharacter}
            className={styles.input}
            type="text"
            placeholder="Search characters..."
          />
        </div>

        {characters.length !== 0 ? (
          <div className={styles.score}>
            Found characters: {characters.length}
          </div>
        ) : (
          ""
        )}
      </header>

      <main className={styles.main}>
        <section className={styles.characters}>
          <CharactersList characters={characters} />
        </section>
      </main>
    </>
  );
};
