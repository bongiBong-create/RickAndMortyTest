export interface ICharacters {
  id: number;
  name: string;
  status: "Alive" | "Dead";
  created: string;
  image?: string;
}
