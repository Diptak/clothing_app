import {
     signInWithGooglePopup,
     createUserDocumentFromAuth,}
      from '../../utils/firebase/firebase.utils'
      import { SignUpform } from '../../components/Sign-up-form/sign-up-form.component';
export const SignIn = () => {

    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
    
    return(
        <div>
            <h1> I am in Sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign-In with Google popup
            </button>
            <SignUpform/>
        </div>
    )
} 