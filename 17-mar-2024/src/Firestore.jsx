import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "./firebase";

const fireStore = getFirestore(app);
export default function Firestore() {
  const writeData = async () => {
    const result = await addDoc(collection(fireStore, "users"), {
      name: "Mayank",
      age: 23,
      isMale: true,
    });
    console.log("Result", result);
  };
  const getDocuments = async () => {
    const docRef = doc(fireStore, "cities", "sb1lBYqmxqFrxuJmTo4L");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const getDocumentByQuery = async () => {
    const collectionRef = collection(fireStore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  return (
    <div className="container text-center">
      <h1>FireStore</h1>
      <button className="btn btn-primary" onClick={writeData}>
        Add data
      </button>
      <button className="btn btn-success m-2" onClick={getDocuments}>
        Get data
      </button>
      <button className="btn btn-success m-2" onClick={getDocumentByQuery}>
        Get Male Documents
      </button>
    </div>
  );
}
