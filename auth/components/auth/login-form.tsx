import { CardWrapper } from "./card-wrapper"

 export const LoginForm=()=>{
    return(
    <CardWrapper headerLabel="Welcome back"
    backButtonLabel="Don't have an account?"
    backButtonref="/auth/register"
    showSocial>
        Login form
    </CardWrapper>
 )}