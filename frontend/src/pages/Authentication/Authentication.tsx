import LoginForm from "@/components/LoginForm/LoginForm"

import "./Authentication.scss"
import AuthSwitcher from "@/components/AuthSwitcher/AuthSwitcher";

const AuthenticationPage: React.FC = () => {
    return (
        <>        
            <div className="form-wrapper">
                <LoginForm></LoginForm>

                <AuthSwitcher />
            </div>
        </>
    )
}

export default AuthenticationPage;
