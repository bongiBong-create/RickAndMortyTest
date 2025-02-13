import { CharacterItem } from "../CharacterItem";
import { Link } from "react-router-dom";
import { useList } from "./hook";

import styles from "./index.module.css";

export const CharactersList = () => {
  const { characters, error } = useList();

  return (
    <ul className={styles.list}>
      {error && <p className={styles.error}>{error}</p>}
      {characters.length !== 0 && (
        <li key={characters[0].id} className={styles.item__box}>
          <div className={styles.item__container}>
            {characters.slice(0, 2).map((char) => (
              <div className={styles.item}>
                <Link
                  target="_blank"
                  to={`/${char.id}`}
                  style={{
                    display: "inline-flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "262px",
                  }}
                >
                  <CharacterItem
                    name={char.name}
                    created={char.created}
                    status={char.status}
                    id={char.id}
                  />
                </Link>
              </div>
            ))}
          </div>
        </li>
      )}
      {characters
        ? characters.slice(2).map((char) => (
            <>
              <li className={styles.item} key={char.id}>
                <Link target="_blank" to={`/${char.id}`}>
                  <CharacterItem
                    name={char.name}
                    created={char.created}
                    status={char.status}
                    id={char.id}
                  />
                </Link>
              </li>
            </>
          ))
        : ""}
    </ul>
  );
};
