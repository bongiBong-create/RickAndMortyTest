import { CharacterItem } from "../CharacterItem";
import { Link } from "react-router-dom";
import { useList } from "./hook";

import styles from "./index.module.css";

export const CharactersList = () => {
  const { characters } = useList();

  return (
    <ul className={styles.list}>
      {characters
        ? characters.map((character) => (
            <li className={styles.item} key={character.id}>
              <Link target="_blank" to={`/${character.id}`}>
                <CharacterItem
                  name={character.name}
                  created={character.created}
                  status={character.status}
                  id={character.id}
                />
              </Link>
            </li>
          ))
        : ""}
    </ul>
  );
};
