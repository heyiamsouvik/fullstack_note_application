// src/recoil/userAtom.js
import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "",
});

export const isAuthenticatedAtom = atom({
  key: "isAuthenticatedAtom",
  default: false,
});
