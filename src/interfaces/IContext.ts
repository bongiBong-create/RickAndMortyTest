import { ChangeEvent } from "react";
import { ICharacters } from "./ICharacter";

export interface IContext {
  characters: ICharacters[];
  setCharacters: (chars: ICharacters[]) => void;
  searchCharacter: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
}