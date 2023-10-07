import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import firebase_app from "../config";
import data from "./ghosts.json";
import { Ghost } from "@/types";

const db = getFirestore(firebase_app);

export const postGhost = async (data: Ghost) => {
  const ghostCol = collection(db, "ghosts");
  await addDoc(ghostCol, data);
};

const postGhosts = async () => {
  data.forEach((ghost) => {
    postGhost(ghost as Ghost);
  });
};

export default postGhosts;
