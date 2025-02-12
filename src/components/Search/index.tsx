import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../app/context";

import { IContext } from "../../interfaces/IContext";

import styles from "./index.module.css";

export const Search = () => {
  const { searchCharacter, change } = useContext<IContext>(AppContext);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
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
  );
};
