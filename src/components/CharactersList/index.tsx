import { FC } from "react";
import { CharactersListProps } from "./model";
import { CharacterItem } from "../CharacterItem";

import styles from "./index.module.css";

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <ul className={styles.list}>
      {characters
        ? characters.map((character) => (
            <li className={styles.item} key={character.id}>
              <CharacterItem
                name={character.name}
                created={character.created}
                status={character.status}
                id={character.id}
              />
            </li>
          ))
        : ""}
    </ul>
  );
};
