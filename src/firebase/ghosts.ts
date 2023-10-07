import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import firebase_app from "./config";
import { Ghost } from "@/types";

const db = getFirestore(firebase_app);

export const getGhosts = async () => {
  const ghostsCol = collection(db, "ghosts");
  const ghostsSnapshot = await getDocs(ghostsCol);
  const ghostsList = ghostsSnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.name.localeCompare(b.name));
  return ghostsList as Ghost[];
};

export const getGhost = async (id: string) => {
  const ghostCol = collection(db, "ghosts");
  const ghostSnapshot = await getDocs(ghostCol);
  const ghost = ghostSnapshot.docs
    .map((doc) => doc.data())
    .find((ghost) => ghost.id === id);
  return ghost as Ghost;
};
