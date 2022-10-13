import './App.css';
import app from './Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleSignInWithPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  return (
    <div className="App">
      <button onClick={handleSignInWithPopup}>Google Sign In</button>
    </div>
  );
}

export default App;
