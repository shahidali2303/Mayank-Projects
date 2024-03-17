import React, { useEffect, useState } from "react";
// import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

// const db = getDatabase(app);
function App() {
  // realtime database app user create function start

  // const postData = () => {
  //   set(ref(db, "users/Mayank"), {
  //     id: 2,
  //     name: "Mayank",
  //     age: 25,
  //   });
  // };

  // realtime database app user create function ends
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log("User Created...");
        console.log(user);
        // ...
      }
    );
  };
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Logged In");
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user, token);
    });
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="container">
        <div>
          <h1>SignUp</h1>
          <div className="container">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button className="btn btn-primary m-2" onClick={signInUser}>
            Sign In
          </button>
        </div>
        <div>
          <h1>Login</h1>
          <div className="container">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button className="btn btn-primary m-2" onClick={signInUser}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-primary m-2" onClick={signInWithGoogle}>
        Sign In With Google
      </button> */}
      <h1>Hello "{user.email}"</h1>
      <button
        className="btn btn-danger"
        onClick={() =>
          signOut(auth)
            .then(() => console.log("signOut Successfull"))
            .catch((error) => {
              console.log(error);
            })
        }
      >
        Logout
      </button>
    </div>
  );
}

export default App;
