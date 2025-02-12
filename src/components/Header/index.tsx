import { useContext } from "react";
import { IContext } from "../../interfaces/IContext";

import { AppContext } from "../../app/context";
import { Search } from "../Search";

import styles from "./index.module.css";

export const Header = () => {
  const { characters } = useContext<IContext>(AppContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Search />
        {characters.length !== 0 && (
          <div className={styles.score}>
            Found characters: {characters.length}
          </div>
        )}
      </div>
    </header>
  );
};
