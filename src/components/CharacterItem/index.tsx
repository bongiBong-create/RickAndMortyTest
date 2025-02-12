import { FC } from "react";
import { ICharacters } from "../../interfaces/ICharacter";
import { formateDate } from "../../utils/formateDate";
import styles from "./index.module.css";

export const CharacterItem: FC<ICharacters> = ({
  name,
  status,
  created,
  image,
}) => {
  const isActive = `${status === "Alive" ? styles.active : styles.dead}`;

  return (
    <>
      <h2 className={styles.name}>{name}</h2>
      {image && <img className={styles.image} src={image} alt="image" />}
      <div className={styles.info}>
        <h3 className="status">
          Status: <span className={isActive}> {status}</span>
        </h3>
        <h4 className="created">Created: {formateDate(created)}</h4>
      </div>
    </>
  );
};
