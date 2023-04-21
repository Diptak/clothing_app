
      import { SignUpform } from '../../components/Sign-up-form/sign-up-form.component';
      import { SignInForm } from '../../components/sign-in-form/sign-in-form.component';
        import './authentication.styles.scss'
      export const Authentication = () => {    
    return(
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpform/>
        </div>
    )
} 