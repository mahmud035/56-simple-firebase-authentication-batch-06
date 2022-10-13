import './App.css';
import app from './Firebase/firebase.init';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignInWithPopup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  const handleGithubSignInWithPopup = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log('error:', error);
        setUser({});
      });
  };

  // console.log(user);

  return (
    <div className="App">
      {/* condition ? true : false */}
      {user.uid ? (
        <button onClick={handleSignOut} className="btn-sign-out">
          Sign Out
        </button>
      ) : (
        <>
          <button
            onClick={handleGoogleSignInWithPopup}
            className="btn-google-sign-in"
          >
            Google Sign In
          </button>
          &nbsp;
          <button
            onClick={handleGithubSignInWithPopup}
            className="btn-github-sign-in"
          >
            GitHub Sign In
          </button>
        </>
      )}

      {/* Conditionally render user info */}
      {user.uid && (
        <div>
          <h3> User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
