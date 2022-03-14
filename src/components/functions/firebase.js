import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = initializeApp({});

export const auth = getAuth(firebase);
