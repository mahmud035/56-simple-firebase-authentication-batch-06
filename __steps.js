/* 
//* Steps for Creating firebase project and Install Firebase SDK

//* INITIAL SETUP
1. visit: console.firebase.google.com
2. create a new firebase project
3. visit doc (go to docs)
4. then go to: (Build => Authentication => Web => Get started)
5. Register web app: (firebase project home => click web icon => give name and register)
6. Install firebase for your project: npm install firebase
7. DANGEROUS: get firebase configuration and put it in firebase.init.js file
8. Export app from firebase.init.js file

//* SETUP PROVIDER
9. Create auth using getAuth(app) from 'firebase/auth' by using app from firebase.init.js file
10. Create a provider variable using  new GoogleAuthProvider()
11. Enable Google as a sign-in method in the Firebase console
12. Create a button for google sign-in method with a click handler
13. Inside the event handler {handleSignInWithPopup}, Call signInWithPopup(auth, provider)
14. After signInWithPopup(auth, provider) .then result, error

//* DISPLAY DATA
*/
