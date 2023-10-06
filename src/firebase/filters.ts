import { Question } from "@/types";
import firebase_app from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(firebase_app);

export const getFilters = async (): Promise<Question[]> => {
  const filtersCol = collection(db, "filters");
  const filtersSnapshot = await getDocs(filtersCol);
  const filtersList = filtersSnapshot.docs.map((doc) => doc.data());
  return filtersList as Question[];
};
