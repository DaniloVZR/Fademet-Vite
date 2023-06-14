import { useContext } from "react";
import { FademetContext } from "../context/FademetProvider";

export default function useFademet() {
  return useContext(FademetContext)
}

