import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';

import errors from '@/consts/errorMessage.const';
import regexExpressions from '@/consts/regexExpressions.const';
import useCustomInput from '@/hooks/useCustomInput';
import { UserLoginResponseAPI, UserLoginResponseErrorAPI } from '@/types/user';
import passwordValidationsUtil from '@/utils/password-validations.util';

import CustomInput from '../CustomInput/CustomInput';
import Button from '../StyledComponents/Button';
import HeaderText from '../StyledComponents/HeaderText';
import AvatarIcon from '../StyledComponents/Icons/AvatarIcon';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
    const backendUrl = import.meta.env.VITE_API_BACKEND_URL;
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const {
        hasMinChars,
        hasDigit,
        hasLowercase,
        hasSpecialChar,
        hasUppercase,
    } = passwordValidationsUtil;
    const {
        value: emailInputValue,
        hasError: hasEmailError,
        handleInputOnBlur: handleEmailBlur,
        handleInputOnChange: handleEmailChange,
    } = useCustomInput('', (value: string) => regexExpressions.EMAIL.test(value));
    const {
        value: passwordInputValue,
        hasError: hasPasswordError,
        handleInputOnBlur: handlePasswordBlur,
        handleInputOnChange: handlePasswordChange,
    } = useCustomInput('', (value: string) => (
        hasMinChars(value)
        && hasDigit(value)
        && hasLowercase(value)
        && hasSpecialChar(value)
        && hasUppercase(value)
    ));

    const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        if(hasEmailError || hasPasswordError) {
            return;
        }

        setIsSubmitting(true);
        
        const response = (
            await axios.post<UserLoginResponseAPI>(`${backendUrl}/login`, {
                email: emailInputValue,
                password: passwordInputValue,
            }).finally(() => {
                setIsSubmitting(false);
            })
            .catch(async (err: UserLoginResponseErrorAPI) => {
                toast(err.message);
            })
        ) as AxiosResponse<UserLoginResponseAPI, UserLoginResponseErrorAPI>;

        const token = response?.data.token;
        
        if(token) {
            Cookies.set('token', token, { expires: 1, secure: true });
            
            toast('Successfully logged in');
            
            navigate('/');
        }
    }

    return (
        <>
            <AvatarIcon />

            <div className='auth-wrapper'>
                <HeaderText>Login</HeaderText>

                <HeaderText $secondary>Enter your details to login.</HeaderText>
                
                <Form
                    className="auth-wrapper__form"
                    onSubmit={handleLoginSubmit}
                >
                    <CustomInput
                        id='email'
                        type='email'
                        label='Email*'
                        errorMsg={hasEmailError && errors.email || ''}
                        placeholder='test@test.com'
                        prefixIcon='email'
                        value={emailInputValue}
                        required
                        onBlur={handleEmailBlur}
                        onChange={handleEmailChange}
                    />

                    <CustomInput
                        id='password'
                        type='password'
                        label='Password*'
                        errorMsg={hasPasswordError && errors.password || ''}
                        placeholder='Enter your password'
                        prefixIcon='password'
                        required
                        value={passwordInputValue}
                        onBlur={handlePasswordBlur}
                        onChange={handlePasswordChange}
                    />

                    <Button $primary>
                        {isSubmitting ? 'Submitting' : 'Login'}
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginForm;