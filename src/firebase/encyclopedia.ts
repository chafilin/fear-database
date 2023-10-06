import { EncyclopaediaPost } from "@/types";
import firebase_app from "./config";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";

const db = getFirestore(firebase_app);

export const getEncyclopedia = async (): Promise<EncyclopaediaPost[]> => {
  const encyclopediaCol = collection(db, "encyclopedia");
  const encyclopediaSnapshot = await getDocs(encyclopediaCol);
  const encyclopediaList = encyclopediaSnapshot.docs.map((doc) => doc.data());
  return encyclopediaList as EncyclopaediaPost[];
};

export const getEncyclopediaPost = async (id: string) => {
  const encyclopediaPostCol = doc(db, "encyclopedia", id);
  const encyclopediaPostSnapshot = await getDoc(encyclopediaPostCol);
  const encyclopediaPost = encyclopediaPostSnapshot.data();
  return encyclopediaPost as EncyclopaediaPost;
};
