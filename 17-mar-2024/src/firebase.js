import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpC14xmd6G-XVDSBK_yEys4qVeKxJ0ofE",
  authDomain: "test-be32c.firebaseapp.com",
  projectId: "test-be32c",
  storageBucket: "test-be32c.appspot.com",
  messagingSenderId: "895106130318",
  appId: "1:895106130318:web:d3f69c8711120e7d1904df",
  databaseURL: "https://test-be32c-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
