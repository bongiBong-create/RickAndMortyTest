import axios from "axios";
import { URL_API } from "../constants";

export const getCharactersBySearch = async (name: string) => {
  try {
    const response = await axios.get(`${URL_API}/?name=${name}`);

    return response.data.results;
  } catch (e) {
    console.log(e)
  }
}

export const getCharacterById = async (id: string) => {
  try {
    const response = await axios.get(`${URL_API}/${id}`)

    return response.data;
  } catch (e) {
    console.log(e)
  }
}