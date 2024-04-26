import Button from "../UI/Button"
import HeadphoneIcon from "../UI/Icons/HeadphoneIcon"
import Label from "../UI/Label"
import Navigation from "../UI/Navigation"
import './MainNavigation.scss'

const MainNavigation: React.FC = () => {
    return (
        <Navigation className="nav-wrapper">
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