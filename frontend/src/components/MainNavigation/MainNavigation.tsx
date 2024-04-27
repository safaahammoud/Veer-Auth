import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

import Button from "../StyledComponents/Button"
import HeadphoneIcon from "../StyledComponents/Icons/HeadphoneIcon"
import Label from "../StyledComponents/Label"
import Link from "../StyledComponents/Link"
import Navigation from "../StyledComponents/Navigation"
import './MainNavigation.scss'

const MainNavigation: React.FC = () => {
    const token = Cookies.get('token');

    const navigate = useNavigate();
    const [isAlreadyLogged, setIsAlreadyLogged] = useState(false);

    useEffect(() => {
        setIsAlreadyLogged(!!token)
    }, [token]);

    const logout = () => {
        Cookies.remove('token');
        
        setIsAlreadyLogged(false);

        navigate('/login')
    }

    return (
        <Navigation className="nav-wrapper">
            { isAlreadyLogged && <Link onClick={logout}>Logout</Link> }
            
            <Label $secondary>
                Need help?
            </Label>

            <Button className="nav-wrapper__contact-us-btn">
                <HeadphoneIcon />

                Contact Us
            </Button>
        </Navigation>
    )
}

export default MainNavigation