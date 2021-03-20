import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeSignIn = () =>{
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    else {
    firebase.app(); 
    }    

}
export const googleSignIn =() =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(res => {
            const googleLoginUser = res.user;
            return googleLoginUser;
        }) 
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            const errorMessage = error.message;
            alert(errorMessage);
            const email = error.email;
            alert(email);
        });

    
}

    

export const githubSignIn =() =>{
    const githubProvider = new firebase.auth.GithubAuthProvider();
     return firebase.auth()
        .signInWithPopup(githubProvider)
        .then((githubResult) => {
            const githubUser = githubResult.user;
            return githubUser;
        })
        .catch((error) => {
            var errorCode = error.code;
            alert(errorCode);
            var errorMessage = error.message;
            alert(errorMessage);
            var email = error.email;
            alert(email);
        });
}

export const facebookSignIn =() =>{
    const FBprovider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
        .signInWithPopup(FBprovider)
        .then((result) => {
            var fbUser = result.user;
            return fbUser;
        })
        .catch((error) => {
            var errorCode = error.code;
            alert(errorCode);
            var errorMessage = error.message;
            alert(errorMessage);
            var email = error.email;
            alert(email);
        });
}