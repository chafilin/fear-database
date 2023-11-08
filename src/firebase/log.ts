import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import firebase_app from "./config";
import { Log } from "@/types";

const db = getFirestore(firebase_app);

export const postLog = async (log: string) => {
  const logCol = collection(db, "logs");
  await addDoc(logCol, {
    log,
    date:
      new Date().toLocaleDateString("ru-RU") +
      " " +
      new Date().toLocaleTimeString("ru-RU"),
  });
};

export const getLogs = async () => {
  const logsCol = collection(db, "logs");
  const logsSnapshot = await getDocs(logsCol);
  const logsDoc = logsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      date: data.date,
      log: data.log,
    };
  });
  // @ts-ignore
  return logsDoc as Log[];
};

export const deleteLog = async (id: string) => {
  const logCol = doc(db, "logs", id);
  await deleteDoc(logCol);
};
