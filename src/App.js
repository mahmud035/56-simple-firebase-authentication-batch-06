import './App.css';
import app from './Firebase/firebase.init';
import {
  FacebookAuthProvider,
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
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const handleGithubSignIn = () => {
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
          <button onClick={handleGoogleSignIn} className="btn-google-sign-in">
            Google Sign In
          </button>
          &nbsp;
          <button
            onClick={handleFacebookSignIn}
            className="btn-facebook-sign-in"
          >
            Facebook Sign In
          </button>
          &nbsp;
          <button onClick={handleGithubSignIn} className="btn-github-sign-in">
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
