import { NavLink } from "react-router-dom"
import Button from "../StyledComponents/Button"
import HeadphoneIcon from "../StyledComponents/Icons/HeadphoneIcon"
import Label from "../StyledComponents/Label"
import Navigation from "../StyledComponents/Navigation"
import './MainNavigation.scss'

const MainNavigation: React.FC = () => {
    return (
        <Navigation className="nav-wrapper">
            <NavLink
                to="/auth"
                className={({ isActive }) => isActive ? 'activeLink' : ''}
            >
                Authentication
            </NavLink>
            
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