import axios from "axios";
import { URL_API } from "../constants";

export const getCharactersBySearch = async (name: string) => {
  const response = await axios.get(`${URL_API}/?name=${name}`);

  return response.data.results;

}

export const getCharacterById = async (id: string) => {
  const response = await axios.get(`${URL_API}/${id}`)

  return response.data;

}