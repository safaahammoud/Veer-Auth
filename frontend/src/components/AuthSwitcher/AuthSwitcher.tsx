import Label from "../StyledComponents/Label"
import Link from "../StyledComponents/Link";
import "./AuthSwitcher.scss"

const AuthSwitcher: React.FC = () => {
    return (
        <div className="auth-switcher-wrapper">
            <Label $secondary>Don't have an account? </Label>

            <Link $primary>Sign up</Link>
        </div>
    )
}

export default AuthSwitcher;