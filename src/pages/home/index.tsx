import { AppProvider } from "../../app/context";
import { Header } from "../../components/Header";
import { CharactersList } from "../../components/CharactersList";

import styles from "./index.module.css";

export const Home = () => {
  return (
    <AppProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.characters}>
          <CharactersList />
        </section>
      </main>
    </AppProvider>
  );
};
