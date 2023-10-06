import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import firebase_app from "../config";
import data from "./ghosts.json";

const db = getFirestore(firebase_app);

const postGhost = async (data: any) => {
  const ghostCol = collection(db, "ghosts");
  await addDoc(ghostCol, data);
};

const postGhosts = async () => {
  data.forEach((ghost) => {
    postGhost(ghost);
  });
};

export default postGhosts;
