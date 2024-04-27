import { InputProps } from "@/types";

import EmailIcon from "../StyledComponents/Icons/EmailIcon";
import PasswordIcon from "../StyledComponents/Icons/PasswordIcon";
import Input from "../StyledComponents/Input";
import Label from "../StyledComponents/Label";
import './CustomInput.scss';

const CustomInput: React.FC<InputProps> = (
    { label, id, errorMsg, prefixIcon, ...props }
) => {
    const getIcon = (prefixIconName: string) => {
        if(prefixIconName === 'email') {
            return <EmailIcon className='input-field-wrapper__icon'/>
        } else if (prefixIconName === 'password') {
            return <PasswordIcon className='input-field-wrapper__icon'/>
        }
    }
    
    return (
        <div className="input-field-wrapper">
            <Label
                htmlFor={id}
                className="input-field-wrapper__label"
            >
                {label}
            </Label>

            <div className="input-field-wrapper__field">
                <Input
                    id={id}
                    {...props}
                />

                {prefixIcon && getIcon(prefixIcon)}
            </div>
            
            <div className="input-field-wrapper__error">
                {errorMsg
                    && <Label $color="red">{errorMsg}</Label>
                }
            </div>
        </div>
    );
}

export default CustomInput;